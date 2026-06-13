import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import { About, Services, Showcase, Testimonials, Contact, Footer } from '@/components/Sections';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden pt-24 md:pt-0">
      <NavBar />
      <Hero />
      <FeaturedProperties />
      <About />
      <Services />
      <Showcase />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
