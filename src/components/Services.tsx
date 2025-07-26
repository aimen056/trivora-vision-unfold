import { useEffect, useRef } from 'react';
import { Globe, Palette, Brain, Cpu, Monitor, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    // Cards animation
    gsap.fromTo(
      cardsRef.current.children,
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-stack web applications built with modern frameworks and scalable architecture.",
      gradient: "from-neon-purple to-neon-cyan"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
      gradient: "from-neon-cyan to-neon-pink"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent solutions powered by machine learning and artificial intelligence.",
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      icon: Cpu,
      title: "IoT Integration", 
      description: "Connected device solutions that bridge the physical and digital worlds.",
      gradient: "from-neon-purple to-neon-cyan"
    },
    {
      icon: Monitor,
      title: "WordPress Development",
      description: "Custom WordPress solutions from themes to complex enterprise platforms.",
      gradient: "from-neon-cyan to-neon-pink"
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      description: "Strategic technology guidance to help your business make informed decisions.",
      gradient: "from-neon-pink to-neon-purple"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 smooth-transition`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary smooth-transition">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect */}
              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 smooth-transition">
                <span className="text-sm font-medium">Learn More</span>
                <div className="ml-2 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Services;