export interface Movie {
  id: string
  title: string
  year: number
  genres: string[]
  rating: number
  description: string
  poster: string
  director: string
  cast: string[]
  duration: number
  popularity: number
  keywords: string[]
  streamingPlatforms?: StreamingPlatform[]
}

export interface StreamingPlatform {
  name: string
  logo: string
}

// Comprehensive movie database with various genres
export const movieDatabase: Movie[] = [
  // Action Movies
  {
    id: "1",
    title: "Quantum Strike",
    year: 2023,
    genres: ["action", "sci-fi"],
    rating: 8.2,
    description: "A time-traveling agent must prevent a quantum weapon from destroying reality itself.",
    poster: "/futuristic-action-movie-poster-with-quantum-effect.jpg",
    director: "Alex Chen",
    cast: ["Ryan Mitchell", "Sarah Connor", "David Kim"],
    duration: 142,
    popularity: 95,
    keywords: ["time travel", "quantum physics", "action", "future", "weapon"],
  },
  {
    id: "2",
    title: "Neon Nights",
    year: 2024,
    genres: ["action", "thriller"],
    rating: 7.8,
    description: "A cyberpunk thriller set in a neon-lit metropolis where hackers fight corporate control.",
    poster: "/cyberpunk-neon-city-action-movie-poster.jpg",
    director: "Maria Rodriguez",
    cast: ["Jake Thompson", "Luna Park", "Marcus Steel"],
    duration: 118,
    popularity: 88,
    keywords: ["cyberpunk", "hacker", "neon", "corporate", "thriller"],
  },

  // Romance Movies
  {
    id: "3",
    title: "Starlight Serenade",
    year: 2023,
    genres: ["romance", "drama"],
    rating: 8.5,
    description: "Two astronomers fall in love while searching for signs of extraterrestrial life.",
    poster: "/romantic-movie-poster-with-stars-and-telescope.jpg",
    director: "Emma Watson",
    cast: ["Chris Evans", "Zendaya", "Michael Cera"],
    duration: 126,
    popularity: 92,
    keywords: ["astronomy", "love", "stars", "scientists", "romance"],
  },
  {
    id: "4",
    title: "Coffee Shop Chronicles",
    year: 2024,
    genres: ["romance", "comedy"],
    rating: 7.6,
    description: "A barista and a regular customer navigate love through daily coffee encounters.",
    poster: "/cozy-coffee-shop-romantic-comedy-poster.jpg",
    director: "John Hughes Jr.",
    cast: ["Emma Stone", "Ryan Gosling", "Anna Kendrick"],
    duration: 98,
    popularity: 85,
    keywords: ["coffee", "barista", "daily life", "meet cute", "comedy"],
  },

  // Horror Movies
  {
    id: "5",
    title: "The Void Whispers",
    year: 2023,
    genres: ["horror", "thriller"],
    rating: 7.9,
    description: "A space station crew encounters an ancient evil that feeds on fear and isolation.",
    poster: "/dark-space-horror-movie-poster-with-tentacles.jpg",
    director: "Jordan Peele",
    cast: ["Lupita Nyong'o", "Oscar Isaac", "Tilda Swinton"],
    duration: 134,
    popularity: 89,
    keywords: ["space", "ancient evil", "isolation", "fear", "cosmic horror"],
  },
  {
    id: "6",
    title: "Midnight Manor",
    year: 2024,
    genres: ["horror", "mystery"],
    rating: 8.1,
    description: "A family inherits a Victorian mansion with a dark secret hidden in its walls.",
    poster: "/gothic-victorian-mansion-horror-movie-poster.jpg",
    director: "Ari Aster",
    cast: ["Thomasin McKenzie", "Brian Cox", "Mads Mikkelsen"],
    duration: 112,
    popularity: 91,
    keywords: ["mansion", "victorian", "family secret", "gothic", "inheritance"],
  },

  // Comedy Movies
  {
    id: "7",
    title: "Galactic Goofballs",
    year: 2023,
    genres: ["comedy", "sci-fi"],
    rating: 7.4,
    description: "Incompetent space pirates accidentally save the galaxy while trying to steal a sandwich.",
    poster: "/funny-space-pirates-comedy-movie-poster.jpg",
    director: "Taika Waititi",
    cast: ["Chris Pratt", "Aubrey Plaza", "Nick Offerman"],
    duration: 105,
    popularity: 83,
    keywords: ["space pirates", "comedy", "incompetent", "sandwich", "accidental heroes"],
  },
  {
    id: "8",
    title: "The Algorithm of Love",
    year: 2024,
    genres: ["comedy", "romance"],
    rating: 7.7,
    description: "A dating app developer falls for someone who hates technology and online dating.",
    poster: "/tech-comedy-romance-movie-poster-with-phones-and-h.jpg",
    director: "Judd Apatow",
    cast: ["Issa Rae", "Kumail Nanjiani", "Mindy Kaling"],
    duration: 115,
    popularity: 86,
    keywords: ["dating app", "technology", "opposites attract", "developer", "modern love"],
  },

  // Fantasy Movies
  {
    id: "9",
    title: "The Crystal Prophecy",
    year: 2023,
    genres: ["fantasy", "adventure"],
    rating: 8.6,
    description: "A young mage must unite the elemental crystals to prevent an ancient darkness from returning.",
    poster: "/epic-fantasy-movie-poster-with-magical-crystals-an.jpg",
    director: "Peter Jackson",
    cast: ["Anya Taylor-Joy", "Tom Holland", "Cate Blanchett"],
    duration: 158,
    popularity: 94,
    keywords: ["mage", "crystals", "elemental magic", "ancient darkness", "prophecy"],
  },
  {
    id: "10",
    title: "Dragon's Heart",
    year: 2024,
    genres: ["fantasy", "drama"],
    rating: 8.3,
    description: "A dragon rider forms an unlikely bond with the last dragon to save their dying world.",
    poster: "/dragon-rider-fantasy-movie-poster-with-majestic-dr.jpg",
    director: "Guillermo del Toro",
    cast: ["Saoirse Ronan", "Dev Patel", "Ian McKellen"],
    duration: 145,
    popularity: 90,
    keywords: ["dragon", "rider", "bond", "dying world", "last of kind"],
  },

  // Sci-Fi Movies
  {
    id: "11",
    title: "Neural Network",
    year: 2023,
    genres: ["sci-fi", "thriller"],
    rating: 8.4,
    description: "In a world where minds can be uploaded, a detective investigates digital murders.",
    poster: "/cyberpunk-neural-network-sci-fi-movie-poster.jpg",
    director: "Denis Villeneuve",
    cast: ["Scarlett Johansson", "Adam Driver", "Mahershala Ali"],
    duration: 139,
    popularity: 93,
    keywords: ["neural network", "mind upload", "digital murder", "detective", "cyberpunk"],
  },
  {
    id: "12",
    title: "Mars Colony Alpha",
    year: 2024,
    genres: ["sci-fi", "drama"],
    rating: 8.0,
    description: "The first Mars colonists face impossible choices when their life support systems fail.",
    poster: "/mars-colony-sci-fi-movie-poster-with-red-planet.jpg",
    director: "Christopher Nolan",
    cast: ["Jessica Chastain", "Matt Damon", "Lupita Nyong'o"],
    duration: 167,
    popularity: 87,
    keywords: ["mars", "colony", "life support", "survival", "space exploration"],
  },

  // Drama Movies
  {
    id: "13",
    title: "The Last Letter",
    year: 2023,
    genres: ["drama", "romance"],
    rating: 8.7,
    description: "A war correspondent discovers love letters that change her perspective on life and love.",
    poster: "/emotional-drama-movie-poster-with-vintage-letters.jpg",
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Timothée Chalamet", "Meryl Streep"],
    duration: 128,
    popularity: 89,
    keywords: ["war correspondent", "love letters", "perspective", "emotional", "discovery"],
  },
  {
    id: "14",
    title: "Echoes of Tomorrow",
    year: 2024,
    genres: ["drama", "sci-fi"],
    rating: 8.2,
    description: "A physicist discovers that her research into time could erase her daughter from existence.",
    poster: "/emotional-sci-fi-drama-poster-with-time-concepts.jpg",
    director: "Chloé Zhao",
    cast: ["Natalie Portman", "Oscar Isaac", "Lupita Nyong'o"],
    duration: 143,
    popularity: 85,
    keywords: ["physicist", "time research", "daughter", "existence", "sacrifice"],
  },

  // Adventure Movies
  {
    id: "15",
    title: "The Lost Expedition",
    year: 2023,
    genres: ["adventure", "action"],
    rating: 7.9,
    description: "Explorers search for a legendary city hidden deep in the Amazon rainforest.",
    poster: "/jungle-adventure-movie-poster-with-ancient-ruins.jpg",
    director: "James Cameron",
    cast: ["Tom Hardy", "Alicia Vikander", "John Boyega"],
    duration: 135,
    popularity: 88,
    keywords: ["explorers", "amazon", "legendary city", "jungle", "ancient ruins"],
  },
  {
    id: "16",
    title: "Sky Pirates",
    year: 2024,
    genres: ["adventure", "fantasy"],
    rating: 8.1,
    description: "Airship pirates navigate floating islands in search of the ultimate treasure.",
    poster: "/placeholder.svg?height=400&width=300",
    director: "Gore Verbinski",
    cast: ["Chris Pine", "Zoe Saldana", "Hugh Jackman"],
    duration: 124,
    popularity: 91,
    keywords: ["airship", "pirates", "floating islands", "treasure", "steampunk"],
  },
]
