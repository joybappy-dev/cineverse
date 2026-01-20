import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '@/lib/mock-data';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Critics Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from film critics and movie lovers in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:border-primary/50 transition-all duration-300 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 italic leading-relaxed">{`"${testimonial.content}"`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
