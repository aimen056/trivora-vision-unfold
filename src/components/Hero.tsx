import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { animateTextReveal, createMagneticEffect, createParallaxEffect, animateCounter } from '@/lib/animations';
import AnimatedText from '@/components/AnimatedText';
import AnimatedSection from '@/components/AnimatedSection';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current || !floatingRef.current) return;

    const tl = gsap.timeline();

    // Enhanced hero animation with parallax background
    if (heroRef.current.querySelector('.bg-element')) {
      createParallaxEffect(heroRef.current.querySelector('.bg-element') as HTMLElement, 0.3);
    }

    // Hero text animations with improved timing
    tl.from(textRef.current.children, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      delay: 0.5
    });

    // Enhanced floating elements with 3D transforms
    gsap.set(floatingRef.current.children, { 
      opacity: 0,
      rotationX: 45,
      z: -100 
    });
    
    gsap.to(floatingRef.current.children, {
      opacity: 0.8,
      rotationX: 0,
      z: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      delay: 1
    });

    // Continuous enhanced floating with rotation
    gsap.to(floatingRef.current.children, {
      y: "+=30",
      rotation: "+=10",
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

    // Magnetic effect for main CTA button
    if (buttonRef.current) {
      createMagneticEffect(buttonRef.current, 0.4);
    }

    // Animate counters when they come into view
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll('[data-count]');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-count') || '0');
        animateCounter(counter as HTMLElement, target, 2.5);
      });
    }

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
      {/* Enhanced Background Elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="bg-element absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="bg-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto">
          {/* Main Heading with enhanced text animations */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <AnimatedText className="gradient-text block" animation="reveal" delay={0.5}>
                Building the Future
              </AnimatedText>
              <AnimatedText className="text-foreground block" animation="reveal" delay={0.8}>
                of Web Technology
              </AnimatedText>
            </h1>
          </AnimatedSection>

          {/* Subtitle with typewriter effect */}
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              <AnimatedText animation="typewriter" delay={1.5} stagger={0.03}>
                We craft exceptional web applications, intuitive UI/UX designs, and cutting-edge AI & IoT integrations that transform businesses.
              </AnimatedText>
            </p>
          </AnimatedSection>

          {/* Enhanced CTA Buttons with magnetic effect */}
          <AnimatedSection animation="scale" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  ref={buttonRef}
                  size="lg" 
                  className="btn-hero text-lg px-8 py-6 relative overflow-hidden"
                  onClick={() => scrollToSection('projects')}
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    View Our Work
                  </motion.span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 glass border-white/20 hover:bg-white/10 hover:border-neon-purple/50 transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Start a Project
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Enhanced Stats with counter animations */}
          <AnimatedSection animation="fadeUp" delay={0.8}>
            <div ref={statsRef} className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold gradient-text" data-count="50">0</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold gradient-text" data-count="5">0</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold gradient-text" data-count="100">0</div>
                <div className="text-sm text-muted-foreground">Success</div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced Floating Tech Icons with physics */}
        <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/6"
          >
            <Code className="w-8 h-8 text-neon-purple opacity-60" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -3, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/6"
          >
            <Sparkles className="w-6 h-6 text-neon-cyan opacity-60" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/4"
          >
            <Zap className="w-7 h-7 text-neon-pink opacity-60" />
          </motion.div>
          
          {/* Floating geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${2 + i % 3} h-${2 + i % 3} rounded-full opacity-40`}
              style={{
                backgroundColor: i % 3 === 0 ? 'hsl(var(--neon-purple))' : 
                                i % 3 === 1 ? 'hsl(var(--neon-cyan))' : 
                                'hsl(var(--neon-pink))',
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 12)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-neon-purple to-transparent">
          <motion.div
            className="w-full h-4 bg-neon-purple rounded-full"
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;