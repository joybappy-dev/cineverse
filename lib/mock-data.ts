export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  synopsis: string;
  image: string;
  year: number;
  duration: string;
  director: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Quantum Horizon",
    genre: "Sci-Fi",
    rating: 9.2,
    synopsis: "In a future where time travel is possible but forbidden, a rogue physicist must journey through parallel universes to save humanity from extinction.",
    image: "https://picsum.photos/400/600?random=101",
    year: 2024,
    duration: "2h 28m",
    director: "Elena Vasquez",
  },
  {
    id: 2,
    title: "The Last Symphony",
    genre: "Drama",
    rating: 8.7,
    synopsis: "A deaf composer creates the world's most beautiful symphony, proving that music transcends all barriers in this touching story of determination.",
    image: "https://picsum.photos/400/600?random=102",
    year: 2024,
    duration: "2h 15m",
    director: "Marcus Chen",
  },
  {
    id: 3,
    title: "Shadow Protocol",
    genre: "Action",
    rating: 8.4,
    synopsis: "An elite spy discovers a conspiracy within her own agency and must go rogue to expose the truth before it's too late.",
    image: "https://picsum.photos/400/600?random=103",
    year: 2023,
    duration: "2h 05m",
    director: "James Morrison",
  },
  {
    id: 4,
    title: "Whispers in the Dark",
    genre: "Horror",
    rating: 7.9,
    synopsis: "A family moves into their dream home only to discover it harbors a terrifying secret that has haunted the town for centuries.",
    image: "https://picsum.photos/400/600?random=104",
    year: 2024,
    duration: "1h 52m",
    director: "Sarah Kim",
  },
  {
    id: 5,
    title: "Love in Paris",
    genre: "Romance",
    rating: 8.1,
    synopsis: "Two strangers meet on the streets of Paris and embark on a whirlwind romance that will change their lives forever.",
    image: "https://picsum.photos/400/600?random=105",
    year: 2023,
    duration: "1h 58m",
    director: "Pierre Dubois",
  },
  {
    id: 6,
    title: "The Heist",
    genre: "Thriller",
    rating: 8.8,
    synopsis: "A master thief assembles an unlikely team for one last job: stealing a priceless artifact from the world's most secure vault.",
    image: "https://picsum.photos/400/600?random=106",
    year: 2024,
    duration: "2h 22m",
    director: "Michael Torres",
  },
  {
    id: 7,
    title: "Laugh Out Loud",
    genre: "Comedy",
    rating: 7.6,
    synopsis: "A stand-up comedian's life turns upside down when his jokes start predicting the future, leading to hilarious consequences.",
    image: "https://picsum.photos/400/600?random=107",
    year: 2023,
    duration: "1h 45m",
    director: "Amy Williams",
  },
  {
    id: 8,
    title: "Kingdom of Shadows",
    genre: "Fantasy",
    rating: 9.0,
    synopsis: "A young warrior must unite the fractured kingdoms of a magical realm to defeat an ancient evil awakening from its thousand-year slumber.",
    image: "https://picsum.photos/400/600?random=108",
    year: 2024,
    duration: "2h 45m",
    director: "Christopher Blake",
  },
];

export const genres = ["Sci-Fi", "Drama", "Action", "Horror", "Romance", "Thriller", "Comedy", "Fantasy"];

export const testimonials = [
  {
    name: "Alex Rivera",
    role: "Film Critic",
    content: "CineVerse has become my go-to platform for discovering hidden gems. The curation is exceptional!",
    avatar: "https://picsum.photos/100/100?random=201",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Movie Enthusiast",
    content: "Finally, a movie database that understands cinema. The recommendations are always spot-on.",
    avatar: "https://picsum.photos/100/100?random=202",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Director",
    content: "As a filmmaker, I appreciate how CineVerse showcases both blockbusters and indie films equally.",
    avatar: "https://picsum.photos/100/100?random=203",
    rating: 5,
  },
];

export const features = [
  {
    title: "Curated Collections",
    description: "Hand-picked movie collections by film experts and critics worldwide",
  },
  {
    title: "Honest Reviews",
    description: "Authentic ratings from a community of passionate movie lovers",
  },
  {
    title: "Latest Releases",
    description: "Stay updated with new releases and upcoming blockbusters",
  },
];
