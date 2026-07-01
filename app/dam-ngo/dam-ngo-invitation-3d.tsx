"use client"

import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"
import { gsap } from "gsap"
import * as THREE from "three"
import styles from "./dam-ngo-invitation-3d.module.css"

const zStyle = (value: number) => ({ "--z": `${value}px` }) as CSSProperties
const snowflakes = Array.from({ length: 42 }, (_, index) => ({
  id: `snow-${index}`,
  x: (index * 17 + 9) % 100,
  delay: -((index * 0.47) % 12),
  duration: 11 + (index % 7) * 1.4,
  size: 2 + (index % 5) * 0.8,
  drift: index % 2 === 0 ? 28 + (index % 6) * 7 : -28 - (index % 6) * 7,
  opacity: 0.34 + (index % 6) * 0.08,
}))
const petals = Array.from({ length: 16 }, (_, index) => ({
  id: `petal-${index}`,
  x: (index * 23 + 5) % 100,
  delay: -((index * 0.83) % 14),
  duration: 15 + (index % 6) * 1.8,
  size: 8 + (index % 5) * 2,
  drift: index % 2 === 0 ? 54 + (index % 4) * 16 : -54 - (index % 4) * 16,
  rotate: index % 2 === 0 ? 160 : -160,
}))
const fallStyle = (item: {
  x: number
  delay: number
  duration: number
  size: number
  drift: number
  opacity?: number
  rotate?: number
}) =>
  ({
    "--x": `${item.x}%`,
    "--delay": `${item.delay}s`,
    "--duration": `${item.duration}s`,
    "--size": `${item.size}px`,
    "--drift": `${item.drift}px`,
    "--opacity": item.opacity ?? 0.62,
    "--rotate": `${item.rotate ?? 120}deg`,
  }) as CSSProperties

export function DamNgoInvitation3D() {
  const rootRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const threeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    const mount = threeRef.current
    if (!root || !stage || !mount) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xf2e8fb, 0.018)

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1200)
    camera.position.set(0, 0, 430)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.12
    mount.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xfff6ef, 1.8)
    const key = new THREE.DirectionalLight(0xffead0, 2.6)
    key.position.set(-180, 220, 260)
    const rim = new THREE.PointLight(0xd9b6ff, 2.4, 720)
    rim.position.set(210, 24, 180)
    const glow = new THREE.PointLight(0xffd7ed, 1.9, 620)
    glow.position.set(-160, -120, 220)
    scene.add(ambient, key, rim, glow)

    const particleCount = 150
    const positions = new Float32Array(particleCount * 3)
    const speeds: number[] = []
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 900
      positions[i * 3 + 1] = (Math.random() - 0.5) * 470
      positions[i * 3 + 2] = 80 + Math.random() * 220
      speeds.push(0.22 + Math.random() * 0.72)
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfff0c8,
      size: 3.2,
      transparent: true,
      opacity: 0.44,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const glowGeometry = new THREE.PlaneGeometry(720, 720)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xf6d9ff,
      transparent: true,
      opacity: 0.075,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const bloomPlane = new THREE.Mesh(glowGeometry, glowMaterial)
    bloomPlane.position.set(170, 60, -40)
    scene.add(bloomPlane)

    const interactiveLayers = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-depth]"))
    const title = root.querySelector<HTMLElement>("[data-title]")
    const date = root.querySelector<HTMLElement>("[data-date-card]")
    const photo = root.querySelector<HTMLElement>("[data-photo-frame]")
    const hearts = root.querySelector<HTMLElement>("[data-hearts]")
    const groom = root.querySelector<HTMLElement>("[data-groom]")
    const bride = root.querySelector<HTMLElement>("[data-bride]")
    const flowers = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-flower]"))

    gsap.set(interactiveLayers, {
      z: (_, layer) => Number((layer as HTMLElement).dataset.depth || 0),
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50%",
    })
    gsap.fromTo(
      stage,
      { scale: 0.985, z: -18, opacity: 0 },
      { scale: 1, z: 0, opacity: 1, duration: reduceMotion ? 0 : 1.4, ease: "power3.out" },
    )

    const floatEase = "sine.inOut"
    if (!reduceMotion) {
      gsap.to(root, { "--pointer-x": "62%", "--pointer-y": "38%", duration: 10, ease: floatEase, yoyo: true, repeat: -1 })
      gsap.to(stage, { z: 18, duration: 30, ease: "sine.inOut", yoyo: true, repeat: -1 })
      gsap.to(stage, { x: 6, duration: 18, ease: floatEase, yoyo: true, repeat: -1 })
      gsap.to(groom, { y: -7, scale: 1.008, duration: 7.8, ease: floatEase, yoyo: true, repeat: -1 })
      gsap.to(bride, { y: -6, scale: 1.008, duration: 8.2, ease: floatEase, yoyo: true, repeat: -1 })
      gsap.to(photo, { y: -8, rotateZ: 0.22, duration: 10, ease: floatEase, yoyo: true, repeat: -1 })
      gsap.to(title, { y: -5, z: -48, rotateX: -0.8, duration: 7.5, ease: floatEase, yoyo: true, repeat: -1 })
      gsap.to(hearts, { y: -4, z: -30, scale: 1.035, duration: 6.2, ease: floatEase, yoyo: true, repeat: -1 })
      gsap.to(date, { y: -5, z: -8, rotateX: 0.75, duration: 8.8, ease: floatEase, yoyo: true, repeat: -1 })
      flowers.forEach((flower, index) => {
        gsap.to(flower, {
          rotateZ: index % 2 === 0 ? 1.4 : -1.4,
          x: index % 2 === 0 ? 7 : -7,
          duration: 6 + index * 0.7,
          ease: floatEase,
          yoyo: true,
          repeat: -1,
        })
      })
    }

    const stageX = gsap.quickTo(stage, "rotationY", { duration: 0.8, ease: "power3.out" })
    const stageY = gsap.quickTo(stage, "rotationX", { duration: 0.8, ease: "power3.out" })
    const cameraX = gsap.quickTo(camera.position, "x", { duration: 1.2, ease: "power3.out" })
    const cameraY = gsap.quickTo(camera.position, "y", { duration: 1.2, ease: "power3.out" })

    const onPointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect()
      const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      root.style.setProperty("--pointer-x", `${((nx + 1) / 2) * 100}%`)
      root.style.setProperty("--pointer-y", `${((ny + 1) / 2) * 100}%`)
      stageX(nx * 3)
      stageY(ny * -2.2)
      cameraX(nx * 12)
      cameraY(ny * -7)

      interactiveLayers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0)
        gsap.to(layer, {
          x: nx * depth * 0.018,
          y: ny * depth * -0.012,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        })
      })
    }

    const hoverIn = (target: HTMLElement | null, vars: gsap.TweenVars) => {
      if (!target) return
      target.addEventListener("pointerenter", () => gsap.to(target, { ...vars, duration: 0.55, ease: "power3.out" }))
      target.addEventListener("pointerleave", () =>
        gsap.to(target, {
          rotateX: 0,
          rotateY: 0,
          z: Number(target.dataset.depth || 0),
          filter: "",
          duration: 0.65,
          ease: "power3.out",
        }),
      )
    }

    hoverIn(photo, { rotateX: -1.8, rotateY: 2.4, z: 24, filter: "drop-shadow(0 34px 62px rgba(74,45,89,0.26))" })
    hoverIn(date, {
      rotateX: -2.4,
      rotateY: -1.5,
      z: 10,
      y: -14,
      filter: "drop-shadow(0 30px 46px rgba(108,74,132,0.24))",
    })
    hoverIn(title, {
      rotateX: -3,
      rotateY: 2.2,
      z: -36,
      filter: "drop-shadow(0 0 26px rgba(173,111,226,0.38))",
    })

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth
      const height = mount.clientHeight || window.innerHeight
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    let frame = 0
    const animate = (time: number) => {
      const t = time * 0.001
      if (!reduceMotion) {
        const position = particleGeometry.attributes.position as THREE.BufferAttribute
        for (let i = 0; i < particleCount; i += 1) {
          const offset = i * 3
          positions[offset] += Math.sin(t * 0.22 + i) * 0.018 * speeds[i]
          positions[offset + 1] += Math.cos(t * 0.18 + i) * 0.026 * speeds[i]
        }
        position.needsUpdate = true
        particles.rotation.z = Math.sin(t * 0.08) * 0.018
        bloomPlane.material.opacity = 0.062 + Math.sin(t * 0.7) * 0.018
        key.intensity = 2.45 + Math.sin(t * 0.55) * 0.18
        rim.position.x = 210 + Math.sin(t * 0.42) * 28
      }
      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    root.addEventListener("pointermove", onPointerMove)
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      root.removeEventListener("pointermove", onPointerMove)
      gsap.killTweensOf([root, stage, title, date, photo, hearts, groom, bride, ...flowers, ...interactiveLayers])
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
      particleGeometry.dispose()
      particleMaterial.dispose()
      glowGeometry.dispose()
      glowMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <main ref={rootRef} className={styles.shell}>
      <img className={styles.background} src="/images/dam-ngo-lavender-bg.png" alt="" aria-hidden="true" />
      <div ref={threeRef} className={styles.threeLayer} aria-hidden="true" />
      <div className={styles.fallLayer} aria-hidden="true">
        {snowflakes.map((flake) => (
          <span key={flake.id} className={styles.snowflake} style={fallStyle(flake)} />
        ))}
        {petals.map((petal) => (
          <span key={petal.id} className={styles.petal} style={fallStyle(petal)} />
        ))}
      </div>
      <section ref={stageRef} className={styles.stage} aria-label="Lễ Dạm Ngõ - Sang và Thương">
        <div data-depth="-180" className={`${styles.layer} ${styles.patterns}`} style={zStyle(-180)} aria-hidden="true" />
        <div data-depth="-120" data-flower className={`${styles.layer} ${styles.flowerLeft}`} style={zStyle(-120)} aria-hidden="true" />
        <div data-depth="-120" data-flower className={`${styles.layer} ${styles.flowerRight}`} style={zStyle(-120)} aria-hidden="true" />

        <a className={styles.backLink} href="/" aria-label="Về thiệp cưới">
          <span aria-hidden="true">‹</span>
          Thiệp cưới
        </a>

        <img
          data-depth="70"
          data-groom
          className={`${styles.layer} ${styles.groom}`}
          src="/images/groom-cartoon.png"
          alt=""
          style={zStyle(70)}
          aria-hidden="true"
        />
        <img
          data-depth="60"
          data-bride
          className={`${styles.layer} ${styles.bride}`}
          src="/images/bride-cartoon.png"
          alt=""
          style={zStyle(60)}
          aria-hidden="true"
        />

        <div className={styles.layout}>
          <div className={styles.copy}>
            <h1 data-depth="-60" data-title className={`${styles.layer} ${styles.title}`} style={zStyle(-60)}>
              <span>Lễ Dạm Ngõ</span>
            </h1>

            <div data-depth="-45" data-hearts className={styles.hearts} style={zStyle(-45)} aria-hidden="true">
              <svg viewBox="0 0 32 32">
                <path d="M16 28S4.5 21.1 4.5 11.9C4.5 7.9 7 5.2 10.4 5.2c2.2 0 4.1 1.2 5.6 3.1 1.5-1.9 3.4-3.1 5.6-3.1 3.4 0 5.9 2.7 5.9 6.7C27.5 21.1 16 28 16 28Z" />
              </svg>
              <svg viewBox="0 0 32 32">
                <path d="M16 28S4.5 21.1 4.5 11.9C4.5 7.9 7 5.2 10.4 5.2c2.2 0 4.1 1.2 5.6 3.1 1.5-1.9 3.4-3.1 5.6-3.1 3.4 0 5.9 2.7 5.9 6.7C27.5 21.1 16 28 16 28Z" />
              </svg>
            </div>

            <article data-depth="-20" data-date-card className={`${styles.layer} ${styles.dateCard}`} style={zStyle(-20)}>
              <span>Thứ Hai</span>
              <strong>31.08.2026</strong>
              <i aria-hidden="true" />
              <p>
                Chúng con xin gửi lời cảm ơn chân thành đến Bố - Mẹ, Ba - Má. Cảm ơn đã sinh ra,
                nuôi dưỡng và luôn yêu thương chúng con trên hành trình đi đến ngày hôm nay. Bước
                sang một chặng đường mới, chúng con biết mình còn nhiều điều phải học hỏi, chúng con
                xin hứa sẽ cùng nhau xây dựng một tổ ấm thật hạnh phúc.
              </p>
            </article>
          </div>

          <figure data-depth="0" data-photo-frame className={`${styles.layer} ${styles.photoFrame}`} style={zStyle(0)}>
            <div className={styles.outerLine} aria-hidden="true" />
            <div className={styles.innerLine} aria-hidden="true" />
            <div className={styles.cornerTop} aria-hidden="true" />
            <div className={styles.cornerBottom} aria-hidden="true" />
            <img src="/images/dam-ngo-couple-traditional.png" alt="Văn Sang và Thu Thương" />
            <figcaption>
              <strong>Văn Sang &amp; Thu Thương</strong>
              <span>Lời thưa chuyện đầu tiên</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}
