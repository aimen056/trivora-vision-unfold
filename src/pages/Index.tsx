import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const Index = () => {
  // Initialize smooth scrolling and enhanced animations
  useScrollAnimations();
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div id="about">
          <Services />
        </div>
        <Team />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;