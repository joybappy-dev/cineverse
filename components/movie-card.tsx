import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Calendar } from 'lucide-react';
import type { Movie } from '@/lib/mock-data';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/items/${movie.id}`}>
      <Card className="h-full border-border bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
        <div className="relative aspect-[2/3] overflow-hidden bg-muted">
          <Image
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
            {movie.genre}
          </Badge>
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {movie.duration}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {movie.year}
              </span>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors mb-2">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-semibold text-foreground">{movie.rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">/10</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {movie.synopsis}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
