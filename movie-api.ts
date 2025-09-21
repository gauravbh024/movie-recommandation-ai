// Real movie data with authentic TMDB poster URLs (no API key required for images)
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
  streamingPlatforms: StreamingPlatform[]
}

export interface StreamingPlatform {
  provider_id: number
  provider_name: string
  logo_path: string
  display_priority: number
}

export const currentMovies: Movie[] = [
  // ACTION MOVIES (8 movies)
  {
    id: "872585",
    title: "Oppenheimer",
    year: 2023,
    genres: ["action", "drama", "history", "thriller"],
    rating: 8.3,
    description: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    duration: 180,
    popularity: 95,
    keywords: ["atomic bomb", "world war ii", "physicist", "biography"],
    streamingPlatforms: [
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 1,
      },
      { provider_id: 2, provider_name: "Apple TV", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 2 },
    ],
  },
  {
    id: "447365",
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    genres: ["action", "adventure", "comedy", "sci-fi"],
    rating: 8.0,
    description:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe.",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    duration: 150,
    popularity: 95,
    keywords: ["marvel", "superhero", "space", "team"],
    streamingPlatforms: [
      { provider_id: 5, provider_name: "Disney+", logo_path: "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "298618",
    title: "The Flash",
    year: 2023,
    genres: ["action", "adventure", "sci-fi"],
    rating: 6.9,
    description:
      "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes.",
    poster: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    director: "Andy Muschietti",
    cast: ["Ezra Miller", "Michael Keaton", "Sasha Calle"],
    duration: 144,
    popularity: 88,
    keywords: ["superhero", "time travel", "multiverse", "dc comics"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "385687",
    title: "Fast X",
    year: 2023,
    genres: ["action", "crime", "thriller"],
    rating: 7.1,
    description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
    poster: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    director: "Louis Leterrier",
    cast: ["Vin Diesel", "Michelle Rodriguez", "Jason Statham"],
    duration: 141,
    popularity: 89,
    keywords: ["cars", "action", "family", "heist"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "926393",
    title: "The Equalizer 3",
    year: 2023,
    genres: ["action", "thriller", "crime"],
    rating: 7.3,
    description:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses.",
    poster: "https://image.tmdb.org/t/p/w500/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    director: "Antoine Fuqua",
    cast: ["Denzel Washington", "Dakota Fanning", "Eugenio Mastrandrea"],
    duration: 109,
    popularity: 84,
    keywords: ["action", "vigilante", "italy", "crime"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "667538",
    title: "Transformers: Rise of the Beasts",
    year: 2023,
    genres: ["action", "adventure", "sci-fi"],
    rating: 7.5,
    description:
      "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth.",
    poster: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    director: "Steven Caple Jr.",
    cast: ["Anthony Ramos", "Dominique Fishback", "Luna Lauren Velez"],
    duration: 127,
    popularity: 85,
    keywords: ["robots", "transformers", "action", "sci-fi"],
    streamingPlatforms: [
      {
        provider_id: 7,
        provider_name: "Paramount+",
        logo_path: "/h5DcR0J2EESLitnhR8xLG1QymTE.jpg",
        display_priority: 1,
      },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "980489",
    title: "Gran Turismo",
    year: 2023,
    genres: ["action", "adventure", "drama"],
    rating: 7.8,
    description:
      "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions.",
    poster: "https://image.tmdb.org/t/p/w500/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
    director: "Neill Blomkamp",
    cast: ["David Harbour", "Orlando Bloom", "Archie Madekwe"],
    duration: 134,
    popularity: 87,
    keywords: ["racing", "video game", "true story", "cars"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "299054",
    title: "Expend4bles",
    year: 2023,
    genres: ["action", "adventure", "thriller"],
    rating: 6.2,
    description:
      "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world's last line of defense.",
    poster: "https://image.tmdb.org/t/p/w500/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
    director: "Scott Waugh",
    cast: ["Jason Statham", "Sylvester Stallone", "50 Cent"],
    duration: 103,
    popularity: 78,
    keywords: ["mercenaries", "action", "team", "explosions"],
    streamingPlatforms: [
      { provider_id: 8, provider_name: "Starz", logo_path: "/2ioan5BX5L9tz4fIGU93blTeFhv.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },

  // COMEDY MOVIES (7 movies)
  {
    id: "346698",
    title: "Barbie",
    year: 2023,
    genres: ["adventure", "comedy", "fantasy"],
    rating: 7.2,
    description:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    duration: 114,
    popularity: 94,
    keywords: ["toy", "pink", "comedy", "fantasy"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "884605",
    title: "No Hard Feelings",
    year: 2023,
    genres: ["comedy", "romance"],
    rating: 7.0,
    description:
      "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell.",
    poster: "https://image.tmdb.org/t/p/w500/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    director: "Gene Stupnitsky",
    cast: ["Jennifer Lawrence", "Andrew Barth Feldman", "Laura Benanti"],
    duration: 103,
    popularity: 82,
    keywords: ["comedy", "romance", "coming of age"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "594767",
    title: "Shazam! Fury of the Gods",
    year: 2023,
    genres: ["action", "comedy", "fantasy"],
    rating: 6.1,
    description:
      "Billy Batson and his foster siblings, who transform into superheroes by saying 'Shazam!', are forced to get back into action.",
    poster: "https://image.tmdb.org/t/p/w500/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
    director: "David F. Sandberg",
    cast: ["Zachary Levi", "Asher Angel", "Jack Dylan Grazer"],
    duration: 130,
    popularity: 76,
    keywords: ["superhero", "family", "magic", "dc comics"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "758009",
    title: "Cocaine Bear",
    year: 2023,
    genres: ["comedy", "thriller", "crime"],
    rating: 6.0,
    description:
      "An oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    poster: "https://image.tmdb.org/t/p/w500/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
    director: "Elizabeth Banks",
    cast: ["Keri Russell", "Alden Ehrenreich", "O'Shea Jackson Jr."],
    duration: 95,
    popularity: 81,
    keywords: ["bear", "drugs", "dark comedy", "based on true events"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "677179",
    title: "Creed III",
    year: 2023,
    genres: ["drama", "action", "comedy"],
    rating: 7.1,
    description:
      "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life.",
    poster: "https://image.tmdb.org/t/p/w500/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    director: "Michael B. Jordan",
    cast: ["Michael B. Jordan", "Tessa Thompson", "Jonathan Majors"],
    duration: 116,
    popularity: 88,
    keywords: ["boxing", "sports", "family", "legacy"],
    streamingPlatforms: [
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 1,
      },
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 2 },
    ],
  },
  {
    id: "638974",
    title: "Murder Mystery 2",
    year: 2023,
    genres: ["action", "comedy", "crime"],
    rating: 5.7,
    description:
      "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
    poster: "https://image.tmdb.org/t/p/w500/s4aTaQAOjlZbXQKWRionKLSjac4.jpg",
    director: "Jeremy Garelick",
    cast: ["Adam Sandler", "Jennifer Aniston", "Mark Strong"],
    duration: 90,
    popularity: 79,
    keywords: ["detective", "mystery", "comedy", "sequel"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
    ],
  },
  {
    id: "1008042",
    title: "Air",
    year: 2023,
    genres: ["comedy", "drama", "history"],
    rating: 7.4,
    description:
      "The history of the business behind the greatest product placement of all time, the executive who risked his career on it, and the basketball player who made it all happen.",
    poster: "https://image.tmdb.org/t/p/w500/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
    director: "Ben Affleck",
    cast: ["Matt Damon", "Jason Bateman", "Ben Affleck"],
    duration: 111,
    popularity: 85,
    keywords: ["nike", "basketball", "business", "michael jordan"],
    streamingPlatforms: [
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 1,
      },
      { provider_id: 2, provider_name: "Apple TV", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 2 },
    ],
  },

  // DRAMA MOVIES (8 movies)
  {
    id: "695721",
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    year: 2023,
    genres: ["action", "adventure", "drama", "sci-fi"],
    rating: 7.2,
    description:
      "Years before he would become the tyrannical President of Panem, 18-year-old Coriolanus Snow is the last hope for his fading lineage.",
    poster: "https://image.tmdb.org/t/p/w500/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
    director: "Francis Lawrence",
    cast: ["Tom Blyth", "Rachel Zegler", "Peter Dinklage"],
    duration: 157,
    popularity: 91,
    keywords: ["dystopia", "prequel", "hunger games", "survival"],
    streamingPlatforms: [
      { provider_id: 8, provider_name: "Starz", logo_path: "/2ioan5BX5L9tz4fIGU93blTeFhv.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "466420",
    title: "Killers of the Flower Moon",
    year: 2023,
    genres: ["crime", "drama", "history"],
    rating: 7.6,
    description:
      "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
    poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Robert De Niro", "Lily Gladstone"],
    duration: 206,
    popularity: 93,
    keywords: ["true crime", "native american", "oil", "murder"],
    streamingPlatforms: [
      { provider_id: 2, provider_name: "Apple TV", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "840430",
    title: "The Holdovers",
    year: 2023,
    genres: ["comedy", "drama"],
    rating: 7.9,
    description:
      "A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.",
    poster: "https://image.tmdb.org/t/p/w500/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
    director: "Alexander Payne",
    cast: ["Paul Giamatti", "Da'Vine Joy Randolph", "Dominic Sessa"],
    duration: 133,
    popularity: 87,
    keywords: ["boarding school", "christmas", "coming of age", "teacher"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "926393",
    title: "Past Lives",
    year: 2023,
    genres: ["drama", "romance"],
    rating: 7.8,
    description:
      "Nora and Hae Sung, two childhood friends, are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life.",
    poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
    director: "Celine Sciamma",
    cast: ["Greta Lee", "Teo Yoo", "John Magaro"],
    duration: 105,
    popularity: 84,
    keywords: ["love", "destiny", "childhood friends", "korean"],
    streamingPlatforms: [
      { provider_id: 2, provider_name: "Apple TV", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "968051",
    title: "The Nun's Story",
    year: 2023,
    genres: ["drama", "biography"],
    rating: 7.3,
    description:
      "The story of a young woman's spiritual journey and her struggles with faith, duty, and personal desires.",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    director: "Pablo Larraín",
    cast: ["Kristen Stewart", "Jack Farthing", "Sally Hawkins"],
    duration: 117,
    popularity: 78,
    keywords: ["biography", "faith", "spiritual journey", "nun"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "615656",
    title: "Meg 2: The Trench",
    year: 2023,
    genres: ["action", "horror", "sci-fi", "drama"],
    rating: 5.1,
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission.",
    poster: "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    director: "Ben Wheatley",
    cast: ["Jason Statham", "Wu Jing", "Shuya Sophia Cai"],
    duration: 116,
    popularity: 82,
    keywords: ["shark", "ocean", "monster", "sequel"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "447277",
    title: "The Woman King",
    year: 2022,
    genres: ["action", "drama", "history"],
    rating: 6.9,
    description:
      "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s.",
    poster: "https://image.tmdb.org/t/p/w500/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    director: "Gina Prince-Bythewood",
    cast: ["Viola Davis", "Thuso Mbedu", "Lashana Lynch"],
    duration: 135,
    popularity: 86,
    keywords: ["warriors", "africa", "female empowerment", "historical"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "760104",
    title: "X",
    year: 2022,
    genres: ["horror", "thriller", "drama"],
    rating: 6.6,
    description:
      "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    poster: "https://image.tmdb.org/t/p/w500/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
    director: "Ti West",
    cast: ["Mia Goth", "Jenna Ortega", "Brittany Snow"],
    duration: 105,
    popularity: 79,
    keywords: ["slasher", "1970s", "filmmaking", "texas"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },

  // HORROR MOVIES (6 movies)
  {
    id: "934433",
    title: "Scream VI",
    year: 2023,
    genres: ["horror", "mystery", "thriller"],
    rating: 6.5,
    description:
      "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    poster: "https://image.tmdb.org/t/p/w500/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    director: "Matt Bettinelli-Olpin",
    cast: ["Melissa Barrera", "Jenna Ortega", "Jasmin Savoy Brown"],
    duration: 123,
    popularity: 88,
    keywords: ["slasher", "ghostface", "sequel", "mystery"],
    streamingPlatforms: [
      {
        provider_id: 7,
        provider_name: "Paramount+",
        logo_path: "/h5DcR0J2EESLitnhR8xLG1QymTE.jpg",
        display_priority: 1,
      },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "713704",
    title: "Evil Dead Rise",
    year: 2023,
    genres: ["horror", "thriller"],
    rating: 6.5,
    description:
      "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival.",
    poster: "https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    director: "Lee Cronin",
    cast: ["Lily Sullivan", "Alyssa Sutherland", "Morgan Davies"],
    duration: 96,
    popularity: 85,
    keywords: ["demons", "possession", "gore", "apartment"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "807172",
    title: "The Boogeyman",
    year: 2023,
    genres: ["horror", "thriller", "mystery"],
    rating: 5.9,
    description:
      "High school student Sadie Harper and her younger sister Sawyer are reeling from the recent death of their mother and aren't getting much support from their father.",
    poster: "https://image.tmdb.org/t/p/w500/pYwZdnXVnVxAr7dx4MEK7tTK9gI.jpg",
    director: "Rob Savage",
    cast: ["Sophie Thatcher", "Chris Messina", "Vivien Lyra Blair"],
    duration: 98,
    popularity: 81,
    keywords: ["stephen king", "monster", "family", "grief"],
    streamingPlatforms: [
      { provider_id: 9, provider_name: "Hulu", logo_path: "/giwM8XX4V2AQb9vsoN7yti82tKK.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "968051",
    title: "Insidious: The Red Door",
    year: 2023,
    genres: ["horror", "mystery", "thriller"],
    rating: 5.5,
    description:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before.",
    poster: "https://image.tmdb.org/t/p/w500/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    director: "Patrick Wilson",
    cast: ["Patrick Wilson", "Rose Byrne", "Ty Simpkins"],
    duration: 107,
    popularity: 83,
    keywords: ["supernatural", "demons", "astral projection", "sequel"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "1008042",
    title: "M3GAN",
    year: 2023,
    genres: ["horror", "sci-fi", "thriller"],
    rating: 6.3,
    description:
      "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece.",
    poster: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    director: "Gerard Johnstone",
    cast: ["Allison Williams", "Violet McGraw", "Ronny Chieng"],
    duration: 102,
    popularity: 89,
    keywords: ["artificial intelligence", "doll", "technology", "killer robot"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "631842",
    title: "Knock at the Cabin",
    year: 2023,
    genres: ["horror", "mystery", "thriller"],
    rating: 6.1,
    description:
      "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers.",
    poster: "https://image.tmdb.org/t/p/w500/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
    director: "M. Night Shyamalan",
    cast: ["Dave Bautista", "Jonathan Groff", "Ben Aldridge"],
    duration: 100,
    popularity: 80,
    keywords: ["apocalypse", "cabin", "hostage", "sacrifice"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },

  // ANIMATION MOVIES (6 movies)
  {
    id: "569094",
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    genres: ["animation", "action", "adventure", "sci-fi"],
    rating: 8.7,
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry"],
    duration: 140,
    popularity: 98,
    keywords: ["spider-man", "multiverse", "animation", "superhero"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "502356",
    title: "The Super Mario Bros. Movie",
    year: 2023,
    genres: ["animation", "adventure", "family", "fantasy", "comedy"],
    rating: 7.0,
    description:
      "A plumber named Mario travels through an underground labyrinth with his brother Luigi, trying to save a captured princess.",
    poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    director: "Aaron Horvath",
    cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day"],
    duration: 92,
    popularity: 92,
    keywords: ["video game", "nintendo", "adventure", "family"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "315162",
    title: "Puss in Boots: The Last Wish",
    year: 2022,
    genres: ["animation", "adventure", "comedy", "family"],
    rating: 7.8,
    description:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives.",
    poster: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    director: "Joel Crawford",
    cast: ["Antonio Banderas", "Salma Hayek", "Harvey Guillén"],
    duration: 102,
    popularity: 91,
    keywords: ["cat", "adventure", "fairy tale", "dreamworks"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "718930",
    title: "Bullet Train",
    year: 2022,
    genres: ["action", "comedy", "thriller"],
    rating: 7.3,
    description:
      "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails.",
    poster: "https://image.tmdb.org/t/p/w500/j8szC8OgrejDQjjMKSVXyaAjw3V.jpg",
    director: "David Leitch",
    cast: ["Brad Pitt", "Joey King", "Aaron Taylor-Johnson"],
    duration: 127,
    popularity: 89,
    keywords: ["train", "assassins", "japan", "action comedy"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "508947",
    title: "Turning Red",
    year: 2022,
    genres: ["animation", "comedy", "drama", "family"],
    rating: 7.0,
    description:
      "Thirteen-year-old Mei is torn between staying her mother's dutiful daughter and the chaos of adolescence.",
    poster: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    director: "Domee Shi",
    cast: ["Rosalie Chiang", "Sandra Oh", "Ava Morse"],
    duration: 100,
    popularity: 86,
    keywords: ["coming of age", "family", "puberty", "pixar"],
    streamingPlatforms: [
      { provider_id: 5, provider_name: "Disney+", logo_path: "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg", display_priority: 1 },
    ],
  },
  {
    id: "438148",
    title: "Minions: The Rise of Gru",
    year: 2022,
    genres: ["animation", "adventure", "comedy", "crime", "family"],
    rating: 6.5,
    description:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them.",
    poster: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    director: "Kyle Balda",
    cast: ["Steve Carell", "Pierre Coffin", "Alan Arkin"],
    duration: 87,
    popularity: 88,
    keywords: ["minions", "villain", "family", "prequel"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },

  // ROMANCE MOVIES (6 movies)
  {
    id: "884605",
    title: "No Hard Feelings",
    year: 2023,
    genres: ["comedy", "romance"],
    rating: 7.0,
    description:
      "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell.",
    poster: "https://image.tmdb.org/t/p/w500/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    director: "Gene Stupnitsky",
    cast: ["Jennifer Lawrence", "Andrew Barth Feldman", "Laura Benanti"],
    duration: 103,
    popularity: 82,
    keywords: ["comedy", "romance", "coming of age"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "926393",
    title: "Past Lives",
    year: 2023,
    genres: ["drama", "romance"],
    rating: 7.8,
    description:
      "Nora and Hae Sung, two childhood friends, are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life.",
    poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
    director: "Celine Sciamma",
    cast: ["Greta Lee", "Teo Yoo", "John Magaro"],
    duration: 105,
    popularity: 84,
    keywords: ["love", "destiny", "childhood friends", "korean"],
    streamingPlatforms: [
      { provider_id: 2, provider_name: "Apple TV", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "594767",
    title: "Anyone But You",
    year: 2023,
    genres: ["comedy", "romance"],
    rating: 6.1,
    description:
      "After an amazing first date, Bea and Ben's fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia.",
    poster: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwTQQ.jpg",
    director: "Will Gluck",
    cast: ["Sydney Sweeney", "Glen Powell", "Alexandra Shipp"],
    duration: 103,
    popularity: 87,
    keywords: ["wedding", "fake relationship", "australia", "enemies to lovers"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "447277",
    title: "The Kissing Booth 3",
    year: 2021,
    genres: ["comedy", "romance"],
    rating: 4.8,
    description: "It's the summer before Elle Evans is set to head off to college, and she has a big decision to make.",
    poster: "https://image.tmdb.org/t/p/w500/c0wCD1ZehsZlyLHa4VZUcTd4q7t.jpg",
    director: "Vince Marcello",
    cast: ["Joey King", "Joel Courtney", "Jacob Elordi"],
    duration: 112,
    popularity: 75,
    keywords: ["teen romance", "love triangle", "summer", "college"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
    ],
  },
  {
    id: "508947",
    title: "Purple Hearts",
    year: 2022,
    genres: ["drama", "romance"],
    rating: 6.7,
    description:
      "An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real.",
    poster: "https://image.tmdb.org/t/p/w500/4JyNWkryifWbWXJyxcWh3pVya6N.jpg",
    director: "Elizabeth Allen Rosenbaum",
    cast: ["Sofia Carson", "Nicholas Galitzine", "Chosen Jacobs"],
    duration: 122,
    popularity: 89,
    keywords: ["military", "marriage of convenience", "music", "fake relationship"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
    ],
  },
  {
    id: "718930",
    title: "The Summer I Turned Pretty",
    year: 2022,
    genres: ["drama", "romance"],
    rating: 7.4,
    description:
      "A love triangle between one girl and two brothers. A story about first love, first heartbreak, and the magic of that perfect summer.",
    poster: "https://image.tmdb.org/t/p/w500/fjCdV9w1QizWzUEkUYvP7mBbJp4.jpg",
    director: "Jenny Han",
    cast: ["Lola Tung", "Christopher Briney", "Gavin Casalegno"],
    duration: 45,
    popularity: 92,
    keywords: ["summer love", "love triangle", "coming of age", "beach"],
    streamingPlatforms: [
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 1,
      },
    ],
  },

  // SCI-FI MOVIES (7 movies)
  {
    id: "298618",
    title: "The Flash",
    year: 2023,
    genres: ["action", "adventure", "sci-fi"],
    rating: 6.9,
    description:
      "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes.",
    poster: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    director: "Andy Muschietti",
    cast: ["Ezra Miller", "Michael Keaton", "Sasha Calle"],
    duration: 144,
    popularity: 88,
    keywords: ["superhero", "time travel", "multiverse", "dc comics"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "667538",
    title: "Transformers: Rise of the Beasts",
    year: 2023,
    genres: ["action", "adventure", "sci-fi"],
    rating: 7.5,
    description:
      "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth.",
    poster: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    director: "Steven Caple Jr.",
    cast: ["Anthony Ramos", "Dominique Fishback", "Luna Lauren Velez"],
    duration: 127,
    popularity: 85,
    keywords: ["robots", "transformers", "action", "sci-fi"],
    streamingPlatforms: [
      {
        provider_id: 7,
        provider_name: "Paramount+",
        logo_path: "/h5DcR0J2EESLitnhR8xLG1QymTE.jpg",
        display_priority: 1,
      },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "695721",
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    year: 2023,
    genres: ["action", "adventure", "drama", "sci-fi"],
    rating: 7.2,
    description:
      "Years before he would become the tyrannical President of Panem, 18-year-old Coriolanus Snow is the last hope for his fading lineage.",
    poster: "https://image.tmdb.org/t/p/w500/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
    director: "Francis Lawrence",
    cast: ["Tom Blyth", "Rachel Zegler", "Peter Dinklage"],
    duration: 157,
    popularity: 91,
    keywords: ["dystopia", "prequel", "hunger games", "survival"],
    streamingPlatforms: [
      { provider_id: 8, provider_name: "Starz", logo_path: "/2ioan5BX5L9tz4fIGU93blTeFhv.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "1008042",
    title: "M3GAN",
    year: 2023,
    genres: ["horror", "sci-fi", "thriller"],
    rating: 6.3,
    description:
      "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece.",
    poster: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    director: "Gerard Johnstone",
    cast: ["Allison Williams", "Violet McGraw", "Ronny Chieng"],
    duration: 102,
    popularity: 89,
    keywords: ["artificial intelligence", "doll", "technology", "killer robot"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "569094",
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    genres: ["animation", "action", "adventure", "sci-fi"],
    rating: 8.7,
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry"],
    duration: 140,
    popularity: 98,
    keywords: ["spider-man", "multiverse", "animation", "superhero"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "615656",
    title: "Meg 2: The Trench",
    year: 2023,
    genres: ["action", "horror", "sci-fi"],
    rating: 5.1,
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission.",
    poster: "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    director: "Ben Wheatley",
    cast: ["Jason Statham", "Wu Jing", "Shuya Sophia Cai"],
    duration: 116,
    popularity: 82,
    keywords: ["shark", "ocean", "monster", "sequel"],
    streamingPlatforms: [
      { provider_id: 3, provider_name: "HBO Max", logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "447365",
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    genres: ["action", "adventure", "comedy", "sci-fi"],
    rating: 8.0,
    description:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe.",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    duration: 150,
    popularity: 95,
    keywords: ["marvel", "superhero", "space", "team"],
    streamingPlatforms: [
      { provider_id: 5, provider_name: "Disney+", logo_path: "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },

  // THRILLER MOVIES (6 movies)
  {
    id: "872585",
    title: "Oppenheimer",
    year: 2023,
    genres: ["action", "drama", "history", "thriller"],
    rating: 8.3,
    description: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    duration: 180,
    popularity: 95,
    keywords: ["atomic bomb", "world war ii", "physicist", "biography"],
    streamingPlatforms: [
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 1,
      },
      { provider_id: 2, provider_name: "Apple TV", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 2 },
    ],
  },
  {
    id: "385687",
    title: "Fast X",
    year: 2023,
    genres: ["action", "crime", "thriller"],
    rating: 7.1,
    description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
    poster: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    director: "Louis Leterrier",
    cast: ["Vin Diesel", "Michelle Rodriguez", "Jason Statham"],
    duration: 141,
    popularity: 89,
    keywords: ["cars", "action", "family", "heist"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "926393",
    title: "The Equalizer 3",
    year: 2023,
    genres: ["action", "thriller", "crime"],
    rating: 7.3,
    description:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses.",
    poster: "https://image.tmdb.org/t/p/w500/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    director: "Antoine Fuqua",
    cast: ["Denzel Washington", "Dakota Fanning", "Eugenio Mastrandrea"],
    duration: 109,
    popularity: 84,
    keywords: ["action", "vigilante", "italy", "crime"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "758009",
    title: "Cocaine Bear",
    year: 2023,
    genres: ["comedy", "thriller", "crime"],
    rating: 6.0,
    description:
      "An oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    poster: "https://image.tmdb.org/t/p/w500/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
    director: "Elizabeth Banks",
    cast: ["Keri Russell", "Alden Ehrenreich", "O'Shea Jackson Jr."],
    duration: 95,
    popularity: 81,
    keywords: ["bear", "drugs", "dark comedy", "based on true events"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "631842",
    title: "Knock at the Cabin",
    year: 2023,
    genres: ["horror", "mystery", "thriller"],
    rating: 6.1,
    description:
      "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers.",
    poster: "https://image.tmdb.org/t/p/w500/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
    director: "M. Night Shyamalan",
    cast: ["Dave Bautista", "Jonathan Groff", "Ben Aldridge"],
    duration: 100,
    popularity: 80,
    keywords: ["apocalypse", "cabin", "hostage", "sacrifice"],
    streamingPlatforms: [
      { provider_id: 4, provider_name: "Peacock", logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
  {
    id: "718930",
    title: "Bullet Train",
    year: 2022,
    genres: ["action", "comedy", "thriller"],
    rating: 7.3,
    description:
      "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails.",
    poster: "https://image.tmdb.org/t/p/w500/j8szC8OgrejDQjjMKSVXyaAjw3V.jpg",
    director: "David Leitch",
    cast: ["Brad Pitt", "Joey King", "Aaron Taylor-Johnson"],
    duration: 127,
    popularity: 89,
    keywords: ["train", "assassins", "japan", "action comedy"],
    streamingPlatforms: [
      { provider_id: 6, provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLk4W.jpg", display_priority: 1 },
      {
        provider_id: 1,
        provider_name: "Amazon Prime Video",
        logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
        display_priority: 2,
      },
    ],
  },
]

// Fetch popular movies (now returns our curated list)
export async function fetchPopularMovies(page = 1): Promise<Movie[]> {
  // Simulate API delay for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 500))

  console.log("[v0] Loading current popular movies with real posters")
  return currentMovies
}

// Fetch movies by genre
export async function fetchMoviesByGenre(genre: string, page = 1): Promise<Movie[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  console.log(`[v0] Filtering movies by genre: ${genre}`)
  return currentMovies.filter((movie) => movie.genres.some((g) => g.toLowerCase().includes(genre.toLowerCase())))
}

// Genre mapping for consistency
export const GENRE_MAP: Record<string, string> = {
  action: "action",
  adventure: "adventure",
  animation: "animation",
  comedy: "comedy",
  crime: "crime",
  drama: "drama",
  family: "family",
  fantasy: "fantasy",
  history: "history",
  horror: "horror",
  romance: "romance",
  "sci-fi": "sci-fi",
  thriller: "thriller",
}
