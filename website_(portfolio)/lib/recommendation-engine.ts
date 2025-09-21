import type { Movie } from "./movie-data"
import { currentMovies } from "./movie-api"

interface UserPreferences {
  genres: string[]
  preferredRating?: number
  preferredYear?: number
  keywords?: string[]
}

interface RecommendationScore {
  movie: Movie
  score: number
  reasons: string[]
}

export class MovieRecommendationEngine {
  private movies: Movie[] = []
  private lastFetch = 0
  private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

  constructor() {
    this.initializeMovies()
  }

  private async initializeMovies() {
    try {
      // Check if we need to refresh the cache
      const now = Date.now()
      if (now - this.lastFetch > this.CACHE_DURATION || this.movies.length === 0) {
        console.log("[v0] Loading current popular movies with real posters")
        this.movies = currentMovies
        this.lastFetch = now
      }
    } catch (error) {
      console.error("[v0] Failed to load movies, using fallback:", error)
      // Use the current movies as fallback
      this.movies = currentMovies
    }
  }

  async recommend(preferences: UserPreferences, limit = 8): Promise<Movie[]> {
    await this.initializeMovies()

    if (this.movies.length === 0) {
      return []
    }

    let filteredMovies = this.movies
    if (preferences.genres && preferences.genres.length > 0) {
      filteredMovies = this.movies.filter((movie) =>
        movie.genres.some((genre) =>
          preferences.genres.some((prefGenre) => genre.toLowerCase().includes(prefGenre.toLowerCase())),
        ),
      )
      console.log(`[v0] Filtered ${filteredMovies.length} movies for genres:`, preferences.genres)
    }

    const scoredMovies = filteredMovies.map((movie) => this.calculateScore(movie, preferences))

    // Sort by score and return top recommendations
    return scoredMovies
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((scored) => scored.movie)
  }

  // Advanced scoring algorithm that considers multiple factors
  private calculateScore(movie: Movie, preferences: UserPreferences): RecommendationScore {
    let score = 0
    const reasons: string[] = []

    // Genre matching (weighted heavily)
    const genreScore = this.calculateGenreScore(movie, preferences.genres)
    score += genreScore * 0.4
    if (genreScore > 0) {
      const matchingGenres = movie.genres.filter((g) => preferences.genres.includes(g))
      reasons.push(`Matches ${matchingGenres.join(", ")} genre${matchingGenres.length > 1 ? "s" : ""}`)
    }

    // Rating boost for high-quality movies
    const ratingScore = this.calculateRatingScore(movie)
    score += ratingScore * 0.25
    if (movie.rating >= 8.0) {
      reasons.push(`Highly rated (${movie.rating}/10)`)
    }

    // Popularity factor
    const popularityScore = this.calculatePopularityScore(movie)
    score += popularityScore * 0.15

    // Recency bonus for newer movies
    const recencyScore = this.calculateRecencyScore(movie)
    score += recencyScore * 0.1
    if (movie.year >= 2023) {
      reasons.push("Recent release")
    }

    // Keyword matching for semantic similarity
    if (preferences.keywords && preferences.keywords.length > 0) {
      const keywordScore = this.calculateKeywordScore(movie, preferences.keywords)
      score += keywordScore * 0.1
      if (keywordScore > 0) {
        reasons.push("Matches your interests")
      }
    }

    // Add some randomness to prevent identical recommendations
    score += Math.random() * 0.05

    return { movie, score, reasons }
  }

  private calculateGenreScore(movie: Movie, preferredGenres: string[]): number {
    if (preferredGenres.length === 0) return 0.5 // Neutral score if no preferences

    const matchingGenres = movie.genres.filter((genre) => preferredGenres.includes(genre))
    const genreMatchRatio = matchingGenres.length / preferredGenres.length

    // Bonus for exact matches and multi-genre alignment
    let score = genreMatchRatio
    if (matchingGenres.length > 1) {
      score += 0.2 // Bonus for multiple genre matches
    }

    return Math.min(score, 1.0)
  }

  private calculateRatingScore(movie: Movie): number {
    // Normalize rating from 0-10 scale to 0-1 scale with emphasis on higher ratings
    return Math.pow(movie.rating / 10, 1.5)
  }

  private calculatePopularityScore(movie: Movie): number {
    // Normalize popularity (assuming 0-100 scale)
    return movie.popularity / 100
  }

  private calculateRecencyScore(movie: Movie): number {
    const currentYear = new Date().getFullYear()
    const yearDiff = currentYear - movie.year

    // More recent movies get higher scores, with diminishing returns
    return Math.max(0, 1 - yearDiff / 10)
  }

  private calculateKeywordScore(movie: Movie, preferredKeywords: string[]): number {
    const movieKeywords = movie.keywords.map((k) => k.toLowerCase())
    const userKeywords = preferredKeywords.map((k) => k.toLowerCase())

    const matches = movieKeywords.filter((keyword) =>
      userKeywords.some((userKeyword) => keyword.includes(userKeyword) || userKeyword.includes(keyword)),
    )

    return matches.length / Math.max(userKeywords.length, 1)
  }

  async getTrending(limit = 6): Promise<Movie[]> {
    await this.initializeMovies()

    return this.movies
      .sort((a, b) => {
        const aScore = a.popularity * 0.7 + this.calculateRecencyScore(a) * 30
        const bScore = b.popularity * 0.7 + this.calculateRecencyScore(b) * 30
        return bScore - aScore
      })
      .slice(0, limit)
  }

  async getByGenre(genre: string, limit = 8): Promise<Movie[]> {
    await this.initializeMovies()
    console.log(`[v0] Getting ${genre} movies from ${this.movies.length} total movies`)

    const genreMovies = this.movies
      .filter((movie) => movie.genres.some((g) => g.toLowerCase().includes(genre.toLowerCase())))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit)

    console.log(`[v0] Found ${genreMovies.length} movies for genre: ${genre}`)
    return genreMovies
  }

  async search(query: string, limit = 10): Promise<Movie[]> {
    await this.initializeMovies()

    const searchTerm = query.toLowerCase()

    const searchResults = this.movies
      .map((movie) => {
        let score = 0
        let matchType = ""

        // Title match (highest priority)
        if (movie.title.toLowerCase().includes(searchTerm)) {
          score += 10
          matchType = "title"
        }

        // Actor match (high priority)
        const actorMatch = movie.cast.find((actor) => actor.toLowerCase().includes(searchTerm))
        if (actorMatch) {
          score += 8
          matchType = matchType || "actor"
        }

        // Director match
        if (movie.director.toLowerCase().includes(searchTerm)) {
          score += 6
          matchType = matchType || "director"
        }

        // Description match
        if (movie.description.toLowerCase().includes(searchTerm)) {
          score += 4
          matchType = matchType || "description"
        }

        // Keyword match
        const keywordMatch = movie.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
        if (keywordMatch) {
          score += 3
          matchType = matchType || "keyword"
        }

        // Add rating bonus for quality
        score += movie.rating * 0.1

        return score > 0 ? { movie, score, matchType } : null
      })
      .filter((result) => result !== null)
      .sort((a, b) => b!.score - a!.score)
      .slice(0, limit)
      .map((result) => result!.movie)

    console.log(`[v0] Search for "${query}" found ${searchResults.length} results`)
    return searchResults
  }
}

// Export singleton instance
export const recommendationEngine = new MovieRecommendationEngine()
