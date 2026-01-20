import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { CategoriesSection } from '@/components/sections/categories';
import { AboutSection } from '@/components/sections/about';
import { StatsSection } from '@/components/sections/stats';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { NewsletterSection } from '@/components/sections/newsletter';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <AboutSection />
        <StatsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
