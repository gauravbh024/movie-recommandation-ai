"use client"

import { useState, useEffect, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { recommendationEngine } from "@/lib/recommendation-engine"
import type { Movie } from "@/lib/movie-data"

interface SearchBarProps {
  onResults?: (movies: Movie[]) => void
  onClear?: () => void
}

export function SearchBar({ onResults, onClear }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (query.trim().length === 0) {
      onClear?.()
      return
    }

    const timeoutId = setTimeout(async () => {
      setIsSearching(true)
      const results = await recommendationEngine.search(query.trim())
      onResults?.(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  const handleClear = useCallback(() => {
    setQuery("")
    onClear?.()
  }, [onClear])

  return (
    <div className="relative max-w-md mx-auto mb-8 fade-in-scale">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search movies, actors, directors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="cosmic-card pl-10 pr-10 bg-card/80 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all duration-300"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 cosmic-button"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {isSearching && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {query.length > 0 && query.length < 3 && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-card/90 backdrop-blur-sm border border-border/30 rounded-lg text-sm text-muted-foreground">
          💡 Try searching for actors like "Tom Hanks", "Scarlett Johansson", or movie titles
        </div>
      )}
    </div>
  )
}
