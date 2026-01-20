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
    image: "https://m.media-amazon.com/images/I/61e-jq3xDvL._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://m.media-amazon.com/images/M/MV5BNTU5MTY2ZWEtZWMzYy00NmIyLWFlNTQtMmQ3MjUwZWVhNGRlXkEyXkFqcGc@._V1_.jpg",
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
    image: "https://img1.od-cdn.com/ImageType-400/7635-1/%7BBD047214-E550-4C58-B667-0D34EAA4CEE5%7DIMG400.JPG",
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
    image: "https://resizing.flixster.com/WAB-w49ZAJmbBBWF2PX3xzgS_a8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31583575_v_v13_aa.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9F85ciOov3Xx1Ayy-CEHRUtqn-72YEArA1A&s",
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
    image: "https://resizing.flixster.com/wOs1_9RLiHExI6y1n7foOsReSSc=/206x305/v2/https://resizing.flixster.com/yEIbGrPVlez_zgkhDTJlXZxwBgc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdmY2FjNWVlLTdhOTgtNDQ0Mi1hNjY2LTc2NjM2NjFmNTE1Ni5qcGc=",
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
    image: "https://cinehorizons.net/sites/default/files/affiches/lol-made-in-usa-affiche.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKZa6SprpSUSwEBpTrW_bn5IQE9W7Il-XSg&s",
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
