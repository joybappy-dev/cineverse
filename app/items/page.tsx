"use client"
import { useState, useMemo } from 'react'; // 1. Added useState and useMemo
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MovieCard } from '@/components/movie-card';
import { movies, genres } from '@/lib/mock-data';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Film, Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function MoviesPage() {
  const searchParams = useSearchParams();
  
  // 2. Initialize state
  // We use the URL param as the default search value if it exists
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || "");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // 3. Filter Logic
  // We use useMemo to optimize performance so it only re-calculates when search or genre changes
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;
      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Film className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Movie Collection
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our curated selection of films across all genres.
            </p>
          </div>

          {/* Filters Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search movies..."
                value={searchTerm} // Controlled input
                onChange={(e) => setSearchTerm(e.target.value)} // Update search state
                className="pl-10 border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {/* "All" Badge to reset genre */}
              <Badge
                variant={selectedGenre === null ? "default" : "outline"}
                className="cursor-pointer transition-colors"
                onClick={() => setSelectedGenre(null)}
              >
                All
              </Badge>

              {genres.slice(0, 10).map((genre) => (
                <Badge
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "outline"} // Highlight active genre
                  className="cursor-pointer transition-colors"
                  onClick={() => setSelectedGenre(genre)} // Set genre state
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          {/* Movies Grid */}
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No movies found matching your criteria</p>
              <button 
                onClick={() => {setSearchTerm(""); setSelectedGenre(null)}}
                className="text-primary hover:underline mt-2"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}