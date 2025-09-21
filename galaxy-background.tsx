"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  twinkleSpeed: number
  moveAngle: number
  brightness: number
  pulsePhase: number
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Star[] = []
    const numStars = 200 // Increased number of stars for more density

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5, // Slightly larger stars
        speed: Math.random() * 0.8 + 0.2, // Faster movement
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.05 + 0.01,
        moveAngle: Math.random() * Math.PI * 2,
        brightness: Math.random() * 0.5 + 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number
    let time = 0 // Added time tracking for smooth animations

    const animate = () => {
      time += 0.016 // Roughly 60fps timing
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 10 + star.pulsePhase) * 0.3 + 0.7
        const currentOpacity = star.opacity * star.brightness * twinkle

        if (star.size > 2) {
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3)
          gradient.addColorStop(0, `rgba(200, 150, 255, ${currentOpacity})`) // Bright purple center
          gradient.addColorStop(0.3, `rgba(150, 100, 220, ${currentOpacity * 0.6})`) // Medium purple
          gradient.addColorStop(1, `rgba(100, 50, 180, 0)`) // Dark purple fade
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 130, 255, ${currentOpacity})`
        ctx.fill()

        star.x += Math.cos(star.moveAngle + time * 0.5) * star.speed * 0.3
        star.y += Math.sin(star.moveAngle + time * 0.3) * star.speed * 0.2

        star.x += star.speed * 0.1
        star.y += star.speed * 0.05

        star.opacity += Math.sin(time * star.twinkleSpeed * 5) * 0.01

        // Wrap around screen
        if (star.x > canvas.width + 10) star.x = -10
        if (star.y > canvas.height + 10) star.y = -10
        if (star.x < -10) star.x = canvas.width + 10
        if (star.y < -10) star.y = canvas.height + 10

        star.opacity = Math.max(0.1, Math.min(1, star.opacity))
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "radial-gradient(ellipse at center, #1a0d2e 0%, #0d0a1a 70%, #000000 100%)",
      }}
    />
  )
}
