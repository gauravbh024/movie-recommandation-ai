"use client"

import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps {
  message?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ message = "Loading...", size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 fade-in-scale">
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-primary glow`} />
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
      </div>
      {message && <p className="text-muted-foreground mt-4 text-center">{message}</p>}
    </div>
  )
}
