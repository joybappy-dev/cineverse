import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, MessageSquare, Clock } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Curated Collections',
      description: 'Hand-picked movie collections by film experts and critics from around the world',
    },
    {
      icon: MessageSquare,
      title: 'Honest Reviews',
      description: 'Authentic ratings and reviews from a passionate community of movie lovers',
    },
    {
      icon: Clock,
      title: 'Latest Releases',
      description: 'Stay updated with new releases, upcoming blockbusters, and premiere dates',
    },
  ];

  return (
    <section id="features" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why CineVerse</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your ultimate companion for discovering and exploring cinema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border bg-background hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
