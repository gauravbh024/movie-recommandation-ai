"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`
        fixed bottom-8 right-8 z-50 transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}
      `}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="cosmic-button h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg glow"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
