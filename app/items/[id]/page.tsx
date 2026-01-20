import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { movies } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowLeft, Clock, Calendar, User, Play, Plus, Share2 } from 'lucide-react';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default async function MovieDetailPage({ params }: Props) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Movie Not Found</h1>
            <Button asChild className="bg-primary text-primary-foreground">
              <Link href="/items">Back to Movies</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section with Backdrop */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-64 relative z-10">
          <Button asChild variant="ghost" className="mb-8 text-foreground/70 hover:text-primary hover:bg-primary/10">
            <Link href="/items" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Movies
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Poster */}
            <div className="md:col-span-1">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-2">
              <Badge className="bg-primary/20 text-primary border-0 mb-4">
                {movie.genre}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{movie.title}</h1>

              {/* Rating and Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-primary/20 px-3 py-1.5 rounded-lg">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="text-lg font-bold text-foreground">{movie.rating}</span>
                  </div>
                  <span className="text-muted-foreground">/10</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{movie.director}</span>
                </div>
              </div>

              {/* Synopsis */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">Synopsis</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {movie.synopsis}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:border-primary hover:text-primary gap-2 bg-transparent">
                  <Plus className="w-5 h-5" />
                  Add to Watchlist
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:border-primary hover:text-primary gap-2 bg-transparent">
                  <Share2 className="w-5 h-5" />
                  Share
                </Button>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-card rounded-xl border border-border">
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Director</h4>
                  <p className="text-foreground font-medium">{movie.director}</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Genre</h4>
                  <p className="text-foreground font-medium">{movie.genre}</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Release Year</h4>
                  <p className="text-foreground font-medium">{movie.year}</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Runtime</h4>
                  <p className="text-foreground font-medium">{movie.duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Movies Section */}
          <div className="mt-16 pb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {movies
                .filter((m) => m.id !== movie.id && m.genre === movie.genre)
                .slice(0, 4)
                .map((relatedMovie) => (
                  <Link key={relatedMovie.id} href={`/items/${relatedMovie.id}`}>
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden group">
                      <Image
                        src={relatedMovie.image || "/placeholder.svg"}
                        alt={relatedMovie.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-white font-medium text-sm line-clamp-1">{relatedMovie.title}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-primary text-primary" />
                            <span className="text-white/80 text-xs">{relatedMovie.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
