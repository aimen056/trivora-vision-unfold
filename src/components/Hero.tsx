import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Zap } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current || !floatingRef.current) return;

    const tl = gsap.timeline();

    // Hero animation
    tl.from(textRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Floating elements animation
    gsap.set(floatingRef.current.children, { opacity: 0 });
    gsap.to(floatingRef.current.children, {
      opacity: 1,
      y: -20,
      duration: 2,
      stagger: 0.3,
      ease: "power2.out",
      delay: 0.5
    });

    // Continuous floating animation
    gsap.to(floatingRef.current.children, {
      y: "+=20",
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });

  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Building the Future</span>
            <br />
            <span className="text-foreground">of Web Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We craft exceptional web applications, intuitive UI/UX designs, and cutting-edge AI & IoT integrations that transform businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-6"
              onClick={() => scrollToSection('projects')}
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 glass border-white/20 hover:bg-white/10"
              onClick={() => scrollToSection('contact')}
            >
              Start a Project
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Success</div>
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-1/4 left-1/6 w-8 h-8 text-neon-purple opacity-60" />
          <Sparkles className="absolute top-1/3 right-1/6 w-6 h-6 text-neon-cyan opacity-60" />
          <Zap className="absolute bottom-1/3 left-1/4 w-7 h-7 text-neon-pink opacity-60" />
          <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-neon-purple rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-1/12 w-3 h-3 bg-neon-cyan rounded-full opacity-60"></div>
          <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-neon-pink rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-neon-purple to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;