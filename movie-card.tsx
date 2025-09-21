"use client"

import type React from "react"

import { useState } from "react"
import type { Movie } from "@/lib/movie-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Calendar, Play, Heart, Info, Tv } from "lucide-react"

interface MovieCardProps {
  movie: Movie
  onSelect?: (movie: Movie) => void
}

export function MovieCard({ movie, onSelect }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSelect?.(movie)
  }

  const handleInfo = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSelect?.(movie)
  }

  return (
    <Card
      className="cosmic-card group cursor-pointer overflow-hidden border-0 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(movie)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=750&width=500"
          }}
        />

        {/* Overlay with controls */}
        <div
          className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between mb-2">
              <Button
                size="sm"
                onClick={handlePlay}
                className="cosmic-button bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Play className="h-4 w-4 mr-1" />
                Watch
              </Button>
              <div className="flex items-center space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleLike}
                  className={`cosmic-button h-8 w-8 ${isLiked ? "text-red-500" : "text-white"}`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button size="icon" variant="ghost" onClick={handleInfo} className="cosmic-button h-8 w-8 text-white">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rating badge */}
        <div className="absolute top-2 right-2">
          <Badge className="cosmic-card bg-black/60 text-white border-0 backdrop-blur-sm">
            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
            {movie.rating}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-balance line-clamp-2 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>

        <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {movie.year}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {movie.duration}m
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 text-pretty">{movie.description}</p>

        {movie.streamingPlatforms && movie.streamingPlatforms.length > 0 && (
          <div className="flex items-center mb-3">
            <Tv className="h-4 w-4 mr-2 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              {movie.streamingPlatforms.slice(0, 3).map((platform, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <img
                    src={platform.logo || "/placeholder.svg"}
                    alt={platform.name}
                    className="h-4 w-4 rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                  <span className="text-xs text-muted-foreground">{platform.name}</span>
                </div>
              ))}
              {movie.streamingPlatforms.length > 3 && (
                <span className="text-xs text-muted-foreground">+{movie.streamingPlatforms.length - 3}</span>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-1">
          {movie.genres.slice(0, 3).map((genre) => (
            <Badge
              key={genre}
              variant="secondary"
              className="text-xs cosmic-card bg-primary/10 text-primary border-primary/20"
            >
              {genre}
            </Badge>
          ))}
          {movie.genres.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{movie.genres.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
