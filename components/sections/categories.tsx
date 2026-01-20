import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Rocket, Drama, Swords, Ghost, Heart, Clapperboard, Laugh, Wand2 } from 'lucide-react';

export function CategoriesSection() {
  const genres = [
    { name: 'Sci-Fi', icon: Rocket },
    { name: 'Drama', icon: Drama },
    { name: 'Action', icon: Swords },
    { name: 'Horror', icon: Ghost },
    { name: 'Romance', icon: Heart },
    { name: 'Thriller', icon: Clapperboard },
    { name: 'Comedy', icon: Laugh },
    { name: 'Fantasy', icon: Wand2 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Explore Genres</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect movie by browsing our extensive genre collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {genres.map((genre) => {
            const Icon = genre.icon;
            return (
              <Link key={genre.name} href="/items">
                <Card className="h-full border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                  <div className="p-6 flex flex-col items-center justify-center h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                      {genre.name}
                    </h3>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
