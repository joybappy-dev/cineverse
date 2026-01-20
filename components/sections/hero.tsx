import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-primary font-medium">Featured This Week</span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Discover Your Next
            <span className="text-primary block mt-2">Favorite Film</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
            Explore thousands of movies from blockbusters to indie gems. Get personalized recommendations and honest reviews from our community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link href="/items">
                <Play className="w-5 h-5" />
                Browse Movies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:border-primary hover:text-primary bg-transparent">
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-border">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10K+</p>
              <p className="text-sm text-muted-foreground mt-1">Movies</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">500K+</p>
              <p className="text-sm text-muted-foreground mt-1">Reviews</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">1M+</p>
              <p className="text-sm text-muted-foreground mt-1">Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
