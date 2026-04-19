'use client'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    THREE: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    let interval: NodeJS.Timeout
    const init = () => {
      if (!window.THREE) return
      
      const THREE = window.THREE
      const canvas = canvasRef.current
      if (!canvas) return

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      camera.position.z = 5

      const particlesCount = 300
      const posArray = new Float32Array(particlesCount * 3)
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15
      }

      const particlesGeometry = new THREE.BufferGeometry()
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: '#ffffff',
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      })

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particlesMesh)

      const mouse = { x: 0, y: 0 }
      const onMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      }
      window.addEventListener('mousemove', onMouseMove)

      const animate = () => {
        requestAnimationFrame(animate)
        particlesMesh.rotation.y += 0.002
        particlesMesh.rotation.x += 0.001

        particlesMesh.position.x += (mouse.x * 0.5 - particlesMesh.position.x) * 0.05
        particlesMesh.position.y += (mouse.y * 0.5 - particlesMesh.position.y) * 0.05

        renderer.render(scene, camera)
      }
      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', handleResize)
        scene.remove(particlesMesh)
        particlesGeometry.dispose()
        particlesMaterial.dispose()
      }
    }

    // Wait for THREE to be available
    if (window.THREE) {
      init()
    } else {
      interval = setInterval(() => {
        if (window.THREE) {
          init()
          clearInterval(interval)
        }
      }, 100)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.6
      }}
    />
  )
}
