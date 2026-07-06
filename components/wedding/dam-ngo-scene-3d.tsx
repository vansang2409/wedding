"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function DamNgoScene3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xf8efff, 0.028)

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120)
    camera.position.set(0, 0.25, 10.8)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    mount.appendChild(renderer.domElement)

    const rig = new THREE.Group()
    const stage = new THREE.Group()
    const floaters = new THREE.Group()
    scene.add(rig)
    rig.add(stage, floaters)

    const ambient = new THREE.HemisphereLight(0xfffbff, 0xd9c8ff, 2.2)
    scene.add(ambient)

    const keyLight = new THREE.PointLight(0xffdbf4, 32, 26)
    keyLight.position.set(-4.2, 5.4, 5.8)
    scene.add(keyLight)

    const violetLight = new THREE.PointLight(0xb995ff, 18, 24)
    violetLight.position.set(4.5, 1.2, 3.2)
    scene.add(violetLight)

    const goldLight = new THREE.PointLight(0xffe2a3, 16, 20)
    goldLight.position.set(0, -2.2, 4)
    scene.add(goldLight)

    const archMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf6e9ff,
      metalness: 0.18,
      roughness: 0.24,
      clearcoat: 0.9,
      transparent: true,
      opacity: 0.52,
    })

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf2cb78,
      metalness: 0.76,
      roughness: 0.18,
      clearcoat: 0.9,
    })

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.06,
      transmission: 0.4,
      thickness: 0.35,
      transparent: true,
      opacity: 0.22,
      clearcoat: 1,
    })

    const archGeometry = new THREE.TorusGeometry(2.85, 0.025, 16, 180, Math.PI)
    const arches: THREE.Mesh<THREE.TorusGeometry, THREE.MeshPhysicalMaterial>[] = []
    for (let i = 0; i < 8; i += 1) {
      const arch = new THREE.Mesh(archGeometry, archMaterial)
      arch.position.set(0, -0.7 + i * 0.045, -0.4 - i * 0.6)
      arch.rotation.set(0, 0, Math.PI)
      arch.scale.set(1 + i * 0.08, 1 + i * 0.08, 1)
      stage.add(arch)
      arches.push(arch)
    }

    const ringGeometry = new THREE.TorusGeometry(1.34, 0.045, 24, 160)
    const leftRing = new THREE.Mesh(ringGeometry, goldMaterial)
    leftRing.position.set(-0.48, 0.04, 0.1)
    leftRing.rotation.set(1.22, 0.18, -0.18)
    stage.add(leftRing)

    const rightRing = new THREE.Mesh(ringGeometry, goldMaterial)
    rightRing.position.set(0.48, 0.0, 0)
    rightRing.rotation.set(1.22, -0.18, 0.18)
    stage.add(rightRing)

    const haloGeometry = new THREE.RingGeometry(1.86, 1.91, 160)
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xfff2c0,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const halo = new THREE.Mesh(haloGeometry, haloMaterial)
    halo.rotation.x = Math.PI / 2.45
    halo.position.y = -0.02
    stage.add(halo)

    const glassGeometry = new THREE.PlaneGeometry(5.4, 2.9, 1, 1)
    const glass = new THREE.Mesh(glassGeometry, glassMaterial)
    glass.position.set(0, -0.03, -0.35)
    stage.add(glass)

    const petalShape = new THREE.Shape()
    petalShape.moveTo(0, 0.32)
    petalShape.bezierCurveTo(-0.26, 0.18, -0.3, -0.18, 0, -0.34)
    petalShape.bezierCurveTo(0.3, -0.18, 0.26, 0.18, 0, 0.32)

    const petalGeometry = new THREE.ExtrudeGeometry(petalShape, {
      depth: 0.018,
      bevelEnabled: true,
      bevelSize: 0.008,
      bevelThickness: 0.008,
      bevelSegments: 2,
    })
    petalGeometry.center()

    const petalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5a8ca,
      roughness: 0.36,
      clearcoat: 0.45,
      transparent: true,
      opacity: 0.72,
    })

    const petals: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshPhysicalMaterial>[] = []
    for (let i = 0; i < 56; i += 1) {
      const petal = new THREE.Mesh(petalGeometry, petalMaterial.clone())
      petal.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.2) * 6,
        -1.4 - Math.random() * 7,
      )
      petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      petal.scale.setScalar(0.12 + Math.random() * 0.18)
      floaters.add(petal)
      petals.push(petal)
    }

    const sparkleGeometry = new THREE.SphereGeometry(0.018, 10, 10)
    const sparkleMaterial = new THREE.MeshBasicMaterial({
      color: 0xfff4c4,
      transparent: true,
      opacity: 0.7,
    })
    const sparkles: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[] = []
    for (let i = 0; i < 95; i += 1) {
      const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial.clone())
      sparkle.position.set(
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 5.6,
        -1.2 - Math.random() * 7,
      )
      sparkle.scale.setScalar(0.7 + Math.random() * 2.2)
      floaters.add(sparkle)
      sparkles.push(sparkle)
    }

    const pointer = new THREE.Vector2(0, 0)
    let frameId = 0

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth
      const height = mount.clientHeight || window.innerHeight
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()

      const isTall = height > width
      rig.scale.setScalar(isTall ? 0.5 : 0.7)
      rig.position.set(0, isTall ? -0.1 : -0.18, 0)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const animate = (time: number) => {
      const t = time * 0.001
      const drift = prefersReducedMotion ? 0 : 1

      rig.rotation.y = THREE.MathUtils.lerp(rig.rotation.y, pointer.x * 0.08, 0.04)
      rig.rotation.x = THREE.MathUtils.lerp(rig.rotation.x, -pointer.y * 0.04, 0.04)
      stage.position.y = Math.sin(t * 0.7) * 0.035 * drift
      stage.rotation.y = Math.sin(t * 0.28) * 0.11 * drift + pointer.x * 0.04

      leftRing.rotation.z -= 0.003 * drift
      rightRing.rotation.z += 0.003 * drift
      halo.rotation.z += 0.0045 * drift
      keyLight.intensity = 29 + Math.sin(t * 1.4) * 3
      violetLight.position.x = 4.5 + Math.sin(t * 0.55) * 0.8

      arches.forEach((arch, index) => {
        arch.rotation.z = Math.PI + Math.sin(t * 0.4 + index * 0.35) * 0.015 * drift
        arch.material.opacity = 0.36 + Math.sin(t * 0.75 + index) * 0.08
      })

      petals.forEach((petal, index) => {
        petal.position.y += Math.sin(t * 0.8 + index) * 0.002 * drift
        petal.position.x += Math.sin(t * 0.35 + index) * 0.0015 * drift
        petal.rotation.x += 0.004 * drift
        petal.rotation.z += 0.006 * drift
      })

      sparkles.forEach((sparkle, index) => {
        sparkle.position.y += Math.sin(t + index) * 0.0015 * drift
        sparkle.material.opacity = 0.34 + Math.sin(t * 1.7 + index) * 0.28
      })

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    mount.addEventListener("pointermove", onPointerMove)
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      mount.removeEventListener("pointermove", onPointerMove)
      mount.removeChild(renderer.domElement)

      renderer.dispose()
      archGeometry.dispose()
      ringGeometry.dispose()
      haloGeometry.dispose()
      haloMaterial.dispose()
      glassGeometry.dispose()
      glassMaterial.dispose()
      petalGeometry.dispose()
      petalMaterial.dispose()
      sparkleGeometry.dispose()
      sparkles.forEach((sparkle) => sparkle.material.dispose())
      petals.forEach((petal) => petal.material.dispose())
      archMaterial.dispose()
      goldMaterial.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-[1] opacity-35" aria-hidden="true" />
}
