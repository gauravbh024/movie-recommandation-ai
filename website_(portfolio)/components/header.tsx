"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Search, User } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border/20 backdrop-blur-sm bg-background/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary glow" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cosmic Cinema
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="cosmic-button">
              Discover
            </Button>
            <Button variant="ghost" className="cosmic-button">
              My List
            </Button>
            <Button variant="ghost" className="cosmic-button">
              Trending
            </Button>
          </nav>

          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost" className="cosmic-button">
              <Search className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="cosmic-button">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
