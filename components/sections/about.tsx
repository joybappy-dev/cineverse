import { Check, Film } from 'lucide-react';

export function AboutSection() {
  const points = [
    'Comprehensive movie database',
    'Expert critic reviews',
    'Community ratings and discussions',
    'Personalized recommendations',
    'Watchlist management',
    'Behind-the-scenes content',
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About CineVerse</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CineVerse is your ultimate destination for discovering, exploring, and discussing 
              films from every corner of the world. From Hollywood blockbusters to indie 
              masterpieces, we cover it all.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to connect movie lovers with their next favorite film. Whether 
              you are a casual viewer or a dedicated cinephile, CineVerse has something for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Film className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">CineVerse</p>
                  <p className="text-muted-foreground">Est. 2020</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary">10K+</div>
                  <p className="text-muted-foreground">Movies Catalogued</p>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="text-4xl font-bold text-primary">1M+</div>
                  <p className="text-muted-foreground">Active Users</p>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <p className="text-muted-foreground">Countries Reached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
