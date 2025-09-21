"use client"

import { useState, useCallback } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { GenreSelector } from "@/components/genre-selector"
import { MovieRecommendations } from "@/components/movie-recommendations"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { FloatingActionButton } from "@/components/floating-action-button"
import { MovieCard } from "@/components/movie-card" // Import MovieCard component
import type { Movie } from "@/lib/movie-data"

export default function HomePage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [searchResults, setSearchResults] = useState<Movie[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleGenreSelect = useCallback(
    (genres: string[]) => {
      setSelectedGenres(genres)
      // Clear search when selecting genres
      if (isSearching) {
        setSearchResults([])
        setIsSearching(false)
      }
    },
    [isSearching],
  )

  const handleSearchResults = useCallback((movies: Movie[]) => {
    setSearchResults(movies)
    setIsSearching(true)
    // Clear genre selection when searching
    setSelectedGenres([])
  }, [])

  const handleClearSearch = useCallback(() => {
    setSearchResults([])
    setIsSearching(false)
  }, [])

  return (
    <div className="min-h-screen galaxy-bg relative">
      <GalaxyBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12 slide-in">
            <h1 className="text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-white via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
              Cosmic Cinema
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover your next favorite movie with AI-powered recommendations from across the galaxy
            </p>
          </div>

          <SearchBar onResults={handleSearchResults} onClear={handleClearSearch} />

          {!isSearching && <GenreSelector onGenreSelect={handleGenreSelect} />}

          {isSearching ? (
            <div className="fade-in-scale">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Search Results</h2>
                {searchResults.length > 0 && (
                  <p className="text-muted-foreground">
                    Found {searchResults.length} movie{searchResults.length !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {searchResults.map((movie, index) => (
                    <div key={movie.id} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <MovieCard movie={movie} onSelect={() => {}} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No movies found. Try a different search term.</p>
                </div>
              )}
            </div>
          ) : (
            <MovieRecommendations selectedGenres={selectedGenres} />
          )}
        </main>
      </div>
      <FloatingActionButton />
    </div>
  )
}
