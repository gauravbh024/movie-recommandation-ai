"use client"

import { useState, useEffect } from "react"
import type { Movie } from "@/lib/movie-data"
import { recommendationEngine } from "@/lib/recommendation-engine"

interface UseRecommendationsProps {
  selectedGenres: string[]
  limit?: number
}

export function useRecommendations({ selectedGenres, limit = 8 }: UseRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [trending, setTrending] = useState<Movie[]>([])

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        console.log("[v0] Fetching trending movies")
        const trendingMovies = await recommendationEngine.getTrending(6)
        setTrending(trendingMovies)
      } catch (error) {
        console.error("[v0] Failed to fetch trending movies:", error)
      }
    }

    fetchTrending()
  }, [])

  useEffect(() => {
    if (selectedGenres.length > 0) {
      setIsLoading(true)

      const fetchRecommendations = async () => {
        try {
          console.log("[v0] Fetching recommendations for genres:", selectedGenres)
          let allGenreMovies: Movie[] = []

          for (const genre of selectedGenres) {
            const genreMovies = await recommendationEngine.getByGenre(genre, 12)
            allGenreMovies = [...allGenreMovies, ...genreMovies]
          }

          // Remove duplicates and limit results
          const uniqueMovies = allGenreMovies.filter(
            (movie, index, self) => index === self.findIndex((m) => m.id === movie.id),
          )

          const finalRecommendations = uniqueMovies.sort((a, b) => b.rating - a.rating).slice(0, limit)

          console.log(`[v0] Final recommendations: ${finalRecommendations.length} movies`)

          // Simulate realistic loading time
          setTimeout(() => {
            setRecommendations(finalRecommendations)
            setIsLoading(false)
          }, 800)
        } catch (error) {
          console.error("[v0] Failed to fetch recommendations:", error)
          setIsLoading(false)
        }
      }

      fetchRecommendations()
    } else {
      setRecommendations([])
      setIsLoading(false)
    }
  }, [selectedGenres, limit])

  return {
    recommendations,
    trending,
    isLoading,
    hasRecommendations: recommendations.length > 0,
    hasTrending: trending.length > 0,
  }
}
