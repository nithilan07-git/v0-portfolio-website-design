"use client"

import { useEffect, useRef } from "react"

export default function CircuitAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      size: number
      hue: number
    }> = []

    const staticParticles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    // Generate initial static background particles
    for (let i = 0; i < 80; i++) {
      staticParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: 1,
        maxLife: 1,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 1,
          size: Math.random() * 2.5 + 1,
          hue: Math.random() * 30 + 180, // Cyan to blue range
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(7, 14, 27, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update static background particles
      for (let i = staticParticles.length - 1; i >= 0; i--) {
        const p = staticParticles[i]
        p.x += p.vx
        p.y += p.vy

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `hsla(200, 100%, 60%, ${0.15 * p.life})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw and update dynamic particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.015

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.life * 0.6})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.strokeStyle = `hsla(${p.hue}, 100%, 70%, ${p.life * 0.3})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size + 2, 0, Math.PI * 2)
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-auto z-0" />
}
