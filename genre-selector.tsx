"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Heart, Laugh, Skull, Sword, Rocket, Ghost, Crown, Sparkles, Drama, Music, Baby } from "lucide-react"

interface Genre {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

const genres: Genre[] = [
  {
    id: "action",
    name: "Action",
    icon: <Zap className="h-5 w-5" />,
    color: "from-red-500 to-orange-500",
    description: "High-octane thrills and excitement",
  },
  {
    id: "romance",
    name: "Romance",
    icon: <Heart className="h-5 w-5" />,
    color: "from-pink-500 to-rose-500",
    description: "Love stories that touch the heart",
  },
  {
    id: "comedy",
    name: "Comedy",
    icon: <Laugh className="h-5 w-5" />,
    color: "from-yellow-500 to-amber-500",
    description: "Laughter and feel-good moments",
  },
  {
    id: "horror",
    name: "Horror",
    icon: <Skull className="h-5 w-5" />,
    color: "from-purple-500 to-indigo-500",
    description: "Spine-chilling scares and suspense",
  },
  {
    id: "adventure",
    name: "Adventure",
    icon: <Sword className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
    description: "Epic journeys and discoveries",
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
    icon: <Rocket className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    description: "Futuristic worlds and technology",
  },
  {
    id: "thriller",
    name: "Thriller",
    icon: <Ghost className="h-5 w-5" />,
    color: "from-gray-500 to-slate-500",
    description: "Edge-of-your-seat suspense",
  },
  {
    id: "drama",
    name: "Drama",
    icon: <Drama className="h-5 w-5" />,
    color: "from-teal-500 to-cyan-500",
    description: "Emotional and character-driven stories",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    icon: <Crown className="h-5 w-5" />,
    color: "from-violet-500 to-purple-500",
    description: "Magical worlds and mythical creatures",
  },
  {
    id: "mystery",
    name: "Mystery",
    icon: <Sparkles className="h-5 w-5" />,
    color: "from-indigo-500 to-blue-500",
    description: "Puzzles and secrets to uncover",
  },
  {
    id: "musical",
    name: "Musical",
    icon: <Music className="h-5 w-5" />,
    color: "from-emerald-500 to-teal-500",
    description: "Songs and dance performances",
  },
  {
    id: "family",
    name: "Family",
    icon: <Baby className="h-5 w-5" />,
    color: "from-orange-500 to-red-500",
    description: "Fun for the whole family",
  },
]

interface GenreSelectorProps {
  onGenreSelect?: (genres: string[]) => void
}

export function GenreSelector({ onGenreSelect }: GenreSelectorProps) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const toggleGenre = (genreId: string) => {
    const newSelection = selectedGenres.includes(genreId)
      ? selectedGenres.filter((id) => id !== genreId)
      : [...selectedGenres, genreId]

    setSelectedGenres(newSelection)
    onGenreSelect?.(newSelection)
  }

  const clearSelection = () => {
    setSelectedGenres([])
    onGenreSelect?.([])
  }

  return (
    <div className="mb-12 fade-in-scale">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-balance">Choose Your Cosmic Journey</h2>
        <p className="text-muted-foreground text-pretty">
          Select one or more genres to discover movies tailored to your taste
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {genres.map((genre) => {
          const isSelected = selectedGenres.includes(genre.id)
          return (
            <Button
              key={genre.id}
              variant={isSelected ? "default" : "outline"}
              className={`
                cosmic-card h-auto p-4 flex flex-col items-center space-y-2 transition-all duration-300
                ${
                  isSelected
                    ? `bg-gradient-to-br ${genre.color} text-white border-transparent glow`
                    : "hover:border-primary/50"
                }
              `}
              onClick={() => toggleGenre(genre.id)}
            >
              <div
                className={`
                p-2 rounded-full transition-all duration-300
                ${isSelected ? "bg-white/20" : "bg-primary/10"}
              `}
              >
                {genre.icon}
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">{genre.name}</div>
                <div
                  className={`
                  text-xs mt-1 transition-all duration-300
                  ${isSelected ? "text-white/80" : "text-muted-foreground"}
                `}
                >
                  {genre.description}
                </div>
              </div>
            </Button>
          )
        })}
      </div>

      {selectedGenres.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 slide-in">
          <span className="text-sm text-muted-foreground mr-2">Selected:</span>
          {selectedGenres.map((genreId) => {
            const genre = genres.find((g) => g.id === genreId)
            return (
              <Badge
                key={genreId}
                variant="secondary"
                className="cosmic-card bg-primary/20 text-primary-foreground border-primary/30"
              >
                {genre?.name}
              </Badge>
            )
          })}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSelection}
            className="ml-2 text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  )
}
