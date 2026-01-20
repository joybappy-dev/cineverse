"use client"
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MovieCard } from '@/components/movie-card';
import { movies, genres } from '@/lib/mock-data';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Film, Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Loading from './loading';

export default function MoviesPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              Explore our curated selection of films across all genres. From timeless classics to the latest releases.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search movies..."
                className="pl-10 border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {genres.slice(0, 5).map((genre) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          {movies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No movies found</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
