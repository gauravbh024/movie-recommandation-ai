"use client"

import { useState } from "react"
import { MovieCard } from "./movie-card"
import { MovieModal } from "./movie-modal"
import { useRecommendations } from "@/hooks/use-recommendations"
import type { Movie } from "@/lib/movie-data"
import { Loader2, Sparkles, TrendingUp } from "lucide-react"

interface MovieRecommendationsProps {
  selectedGenres?: string[]
}

export function MovieRecommendations({ selectedGenres = [] }: MovieRecommendationsProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { recommendations, trending, isLoading, hasRecommendations, hasTrending } = useRecommendations({
    selectedGenres,
    limit: 8,
  })

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie)
  }

  const handleCloseModal = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="space-y-12">
      {/* Personalized Recommendations */}
      {selectedGenres.length > 0 && (
        <section className="fade-in-scale">
          <div className="flex items-center mb-6">
            <Sparkles className="h-6 w-6 mr-2 text-primary glow" />
            <h2 className="text-2xl font-bold text-balance">Recommended for You</h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Analyzing your preferences across the galaxy...</p>
              </div>
            </div>
          ) : hasRecommendations ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recommendations.map((movie, index) => (
                <div key={movie.id} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <MovieCard movie={movie} onSelect={handleMovieSelect} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Select genres above to get personalized recommendations</p>
            </div>
          )}
        </section>
      )}

      {/* Trending Movies */}
      {hasTrending && (
        <section className="fade-in-scale">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 mr-2 text-secondary glow" />
            <h2 className="text-2xl font-bold text-balance">Trending in the Galaxy</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trending.map((movie, index) => (
              <div key={movie.id} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <MovieCard movie={movie} onSelect={handleMovieSelect} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Movie Detail Modal */}
      {selectedMovie && <MovieModal movie={selectedMovie} isOpen={!!selectedMovie} onClose={handleCloseModal} />}
    </div>
  )
}
