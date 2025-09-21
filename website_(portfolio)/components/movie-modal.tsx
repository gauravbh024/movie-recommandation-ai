"use client"

import type { Movie } from "@/lib/movie-data"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Calendar, Play, Heart, Share, User, Film } from "lucide-react"
import { useState } from "react"

interface MovieModalProps {
  movie: Movie
  isOpen: boolean
  onClose: () => void
}

export function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: movie.title,
        text: movie.description,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`Check out ${movie.title}: ${movie.description}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="cosmic-card max-w-4xl max-h-[90vh] overflow-y-auto border-0 bg-card/95 backdrop-blur-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Movie Poster */}
          <div className="relative">
            <img
              src={movie.poster || "/placeholder.svg"}
              alt={movie.title}
              className="w-full aspect-[2/3] object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <Badge className="cosmic-card bg-black/60 text-white border-0 backdrop-blur-sm">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                {movie.rating}/10
              </Badge>
            </div>
          </div>

          {/* Movie Details */}
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-balance mb-2">{movie.title}</DialogTitle>
              <div className="flex items-center text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {movie.year}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {movie.duration} min
                </div>
              </div>
            </DialogHeader>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button className="cosmic-button bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                <Play className="h-4 w-4 mr-2" />
                Watch Now
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleLike}
                className={`cosmic-button ${isLiked ? "text-red-500 border-red-500" : ""}`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="icon" onClick={handleShare} className="cosmic-button bg-transparent">
                <Share className="h-4 w-4" />
              </Button>
            </div>

            {/* Genres */}
            <div>
              <h3 className="font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant="secondary"
                    className="cosmic-card bg-primary/10 text-primary border-primary/20"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Synopsis</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{movie.description}</p>
            </div>

            {/* Cast and Crew */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Film className="h-4 w-4 mr-2" />
                  Director
                </h3>
                <p className="text-muted-foreground">{movie.director}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Cast
                </h3>
                <p className="text-muted-foreground">{movie.cast.join(", ")}</p>
              </div>
            </div>

            {/* Keywords */}
            {movie.keywords.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-1">
                  {movie.keywords.slice(0, 8).map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs cosmic-card border-muted">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
