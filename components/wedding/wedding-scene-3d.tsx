"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

type PhotoPlane = THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>

export function WeddingScene3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xf8efff, 0.035)

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120)
    camera.position.set(0, 0.9, 9.4)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.12
    mount.appendChild(renderer.domElement)

    const rig = new THREE.Group()
    const altar = new THREE.Group()
    const depthField = new THREE.Group()
    scene.add(rig)
    rig.add(depthField, altar)

    const ambient = new THREE.HemisphereLight(0xfff8ff, 0xd7c3ff, 2)
    scene.add(ambient)

    const keyLight = new THREE.PointLight(0xffd8f4, 28, 24)
    keyLight.position.set(-3.8, 5.4, 5.8)
    scene.add(keyLight)

    const warmLight = new THREE.PointLight(0xffefb8, 18, 22)
    warmLight.position.set(4.8, -1.4, 4)
    scene.add(warmLight)

    const backLight = new THREE.PointLight(0x93e7ff, 10, 24)
    backLight.position.set(0, 2.2, -5.5)
    scene.add(backLight)

    const archMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfff2d2,
      metalness: 0.36,
      roughness: 0.22,
      clearcoat: 0.85,
      transparent: true,
      opacity: 0.72,
    })

    const ringMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf4c76f,
      metalness: 1,
      roughness: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    })

    const gemMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.03,
      transmission: 0.82,
      thickness: 0.55,
      clearcoat: 1,
      ior: 1.8,
    })

    const vowMaterial = new THREE.MeshBasicMaterial({
      color: 0xfff9dc,
      transparent: true,
      opacity: 0.36,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const archGeometry = new THREE.TorusGeometry(2.36, 0.028, 16, 168, Math.PI)
    const archRings: THREE.Mesh<THREE.TorusGeometry, THREE.MeshPhysicalMaterial>[] = []
    for (let i = 0; i < 7; i += 1) {
      const arch = new THREE.Mesh(archGeometry, archMaterial)
      arch.position.set(0, -0.68 + i * 0.06, -i * 0.72)
      arch.rotation.set(0, 0, Math.PI)
      arch.scale.set(1 + i * 0.075, 1 + i * 0.075, 1)
      depthField.add(arch)
      archRings.push(arch)
    }

    const aisleMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
    })
    const aisleGeometry = new THREE.PlaneGeometry(2.6, 11)
    const aisle = new THREE.Mesh(aisleGeometry, aisleMaterial)
    aisle.position.set(0, -1.86, -3.2)
    aisle.rotation.x = -Math.PI / 2
    depthField.add(aisle)

    const ringGeometry = new THREE.TorusGeometry(1.15, 0.075, 32, 168)
    const leftRing = new THREE.Mesh(ringGeometry, ringMaterial)
    leftRing.position.set(-0.78, -0.04, 0)
    leftRing.rotation.set(1.2, 0.18, -0.34)
    altar.add(leftRing)

    const rightRing = new THREE.Mesh(ringGeometry, ringMaterial)
    rightRing.position.set(0.78, 0.04, -0.08)
    rightRing.rotation.set(1.2, -0.16, 0.34)
    altar.add(rightRing)

    const gemGeometry = new THREE.OctahedronGeometry(0.24, 2)
    const gem = new THREE.Mesh(gemGeometry, gemMaterial)
    gem.position.set(0, 0.94, 0.24)
    altar.add(gem)

    const vowGeometry = new THREE.RingGeometry(0.9, 0.94, 128)
    const vowOrbit = new THREE.Mesh(vowGeometry, vowMaterial)
    vowOrbit.rotation.x = Math.PI / 2.35
    vowOrbit.position.y = 0.08
    altar.add(vowOrbit)

    const heartShape = new THREE.Shape()
    heartShape.moveTo(0, 0.2)
    heartShape.bezierCurveTo(0, 0.2, -0.44, -0.12, -0.44, -0.46)
    heartShape.bezierCurveTo(-0.44, -0.76, -0.12, -0.87, 0, -0.6)
    heartShape.bezierCurveTo(0.12, -0.87, 0.44, -0.76, 0.44, -0.46)
    heartShape.bezierCurveTo(0.44, -0.12, 0, 0.2, 0, 0.2)

    const heartGeometry = new THREE.ExtrudeGeometry(heartShape, {
      depth: 0.07,
      bevelEnabled: true,
      bevelSize: 0.024,
      bevelThickness: 0.024,
      bevelSegments: 4,
    })
    heartGeometry.center()

    const heartMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc58cff,
      metalness: 0.04,
      roughness: 0.26,
      clearcoat: 0.72,
      emissive: 0x3a1554,
      emissiveIntensity: 0.16,
    })

    const hearts: THREE.Mesh[] = []
    for (let i = 0; i < 22; i += 1) {
      const heart = new THREE.Mesh(heartGeometry, heartMaterial)
      const angle = (i / 22) * Math.PI * 2
      const radius = 2.15 + (i % 4) * 0.33
      heart.position.set(Math.cos(angle) * radius, Math.sin(angle) * 1.05, -1.1 - (i % 6) * 0.2)
      heart.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      heart.scale.setScalar(0.14 + (i % 5) * 0.02)
      altar.add(heart)
      hearts.push(heart)
    }

    const sparkleGeometry = new THREE.SphereGeometry(0.018, 10, 10)
    const sparkleMaterial = new THREE.MeshBasicMaterial({
      color: 0xfff3c1,
      transparent: true,
      opacity: 0.68,
    })
    const sparkles: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[] = []
    for (let i = 0; i < 120; i += 1) {
      const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial.clone())
      sparkle.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.48) * 6,
        -1.4 - Math.random() * 6.8,
      )
      sparkle.scale.setScalar(0.65 + Math.random() * 1.9)
      depthField.add(sparkle)
      sparkles.push(sparkle)
    }

    const textureLoader = new THREE.TextureLoader()
    const loadedTextures: THREE.Texture[] = []
    const photoGeometry = new THREE.PlaneGeometry(1.05, 1.38)
    const photoPlanes: PhotoPlane[] = []
    const photoSources = ["/images/1.jpg", "/images/2.jpg", "/images/4.jpg", "/images/7.jpg", "/images/10.jpg"]
    photoSources.forEach((src, index) => {
      const texture = textureLoader.load(src)
      texture.colorSpace = THREE.SRGBColorSpace
      loadedTextures.push(texture)

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.78,
        side: THREE.DoubleSide,
      })
      const photo = new THREE.Mesh(photoGeometry, material)
      const side = index % 2 === 0 ? -1 : 1
      photo.position.set(side * (2.7 + index * 0.18), 0.45 - (index % 3) * 0.42, -1.2 - index * 0.95)
      photo.rotation.set(0.08, side * -0.36, side * 0.05)
      photo.scale.setScalar(0.72 - index * 0.025)
      depthField.add(photo)
      photoPlanes.push(photo)
    })

    const pointer = new THREE.Vector2(0, 0)
    let scrollDepth = 0
    let frameId = 0

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth
      const height = mount.clientHeight || window.innerHeight
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()

      const isCompact = width < 640
      rig.scale.setScalar(isCompact ? 0.4 : 0.54)
      rig.position.y = isCompact ? -0.86 : -0.48
      camera.position.z = isCompact ? 10.8 : 9.4
    }

    const syncScroll = () => {
      const rect = mount.getBoundingClientRect()
      const viewport = window.innerHeight || 1
      scrollDepth = THREE.MathUtils.clamp((viewport - rect.top) / (viewport + rect.height), 0, 1)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const animate = (time: number) => {
      const t = time * 0.001
      const drift = prefersReducedMotion ? 0 : 1
      const depthPulse = Math.sin(t * 0.42) * 0.5

      rig.rotation.y = THREE.MathUtils.lerp(rig.rotation.y, pointer.x * 0.12, 0.045)
      rig.rotation.x = THREE.MathUtils.lerp(rig.rotation.x, -pointer.y * 0.06, 0.045)
      depthField.position.z = THREE.MathUtils.lerp(depthField.position.z, scrollDepth * 1.35 + depthPulse * 0.08, 0.035)
      altar.position.y = Math.sin(t * 0.75) * 0.035 * drift
      altar.rotation.y = Math.sin(t * 0.34) * 0.15 * drift + pointer.x * 0.06
      altar.rotation.x = Math.sin(t * 0.28) * 0.045 * drift - pointer.y * 0.035

      gem.rotation.y += 0.018 * drift
      gem.rotation.x = Math.sin(t * 1.25) * 0.18 * drift
      vowOrbit.rotation.z -= 0.009 * drift
      keyLight.intensity = 25 + Math.sin(t * 1.5) * 3
      backLight.position.x = Math.sin(t * 0.6) * 1.2

      archRings.forEach((arch, index) => {
        arch.rotation.z = Math.PI + Math.sin(t * 0.35 + index * 0.45) * 0.018 * drift
        arch.material.opacity = 0.42 + Math.sin(t * 0.7 + index) * 0.08
      })

      hearts.forEach((heart, index) => {
        heart.position.y += Math.sin(t * 0.8 + index) * 0.0016 * drift
        heart.rotation.z += (0.0034 + index * 0.0001) * drift
      })

      photoPlanes.forEach((photo, index) => {
        const side = index % 2 === 0 ? -1 : 1
        photo.rotation.y = side * -0.36 + pointer.x * 0.08 + Math.sin(t * 0.45 + index) * 0.045 * drift
        photo.position.y += Math.sin(t * 0.7 + index * 1.7) * 0.0012 * drift
      })

      sparkles.forEach((sparkle, index) => {
        sparkle.position.y += Math.sin(t + index) * 0.0015 * drift
        sparkle.position.z += Math.sin(t * 0.3 + index) * 0.0009 * drift
        sparkle.material.opacity = 0.38 + Math.sin(t * 1.6 + index) * 0.26
      })

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    resize()
    syncScroll()
    window.addEventListener("resize", resize)
    window.addEventListener("scroll", syncScroll, { passive: true })
    mount.addEventListener("pointermove", onPointerMove)
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", syncScroll)
      mount.removeEventListener("pointermove", onPointerMove)
      mount.removeChild(renderer.domElement)

      renderer.dispose()
      archGeometry.dispose()
      aisleGeometry.dispose()
      ringGeometry.dispose()
      gemGeometry.dispose()
      vowGeometry.dispose()
      heartGeometry.dispose()
      sparkleGeometry.dispose()
      photoGeometry.dispose()
      archMaterial.dispose()
      ringMaterial.dispose()
      gemMaterial.dispose()
      vowMaterial.dispose()
      aisleMaterial.dispose()
      heartMaterial.dispose()
      sparkles.forEach((sparkle) => sparkle.material.dispose())
      photoPlanes.forEach((photo) => photo.material.dispose())
      loadedTextures.forEach((texture) => texture.dispose())
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 opacity-90 mix-blend-normal"
      aria-hidden="true"
    />
  )
}
