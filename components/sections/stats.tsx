export function StatsSection() {
  const stats = [
    {
      number: '10K+',
      label: 'Movies',
      description: 'In our database',
    },
    {
      number: '500K+',
      label: 'Reviews',
      description: 'From our community',
    },
    {
      number: '98%',
      label: 'Accuracy',
      description: 'Rating precision',
    },
    {
      number: '24/7',
      label: 'Updates',
      description: 'New releases daily',
    },
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">Cinema Stats</h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Join the largest community of movie enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-secondary-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-secondary-foreground/60">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
