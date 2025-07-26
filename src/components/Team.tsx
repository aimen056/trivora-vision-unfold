import { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      {
        y: 80,
        opacity: 0,
        rotateY: 20
      },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const founders = [
    {
      name: "Alex Chen",
      role: "CEO & Full-Stack Developer",
      avatar: "/api/placeholder/300/300",
      bio: "10+ years in web development, specializing in scalable architectures and team leadership.",
      skills: ["React", "Node.js", "AWS", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & AI Specialist",
      avatar: "/api/placeholder/300/300", 
      bio: "AI/ML expert with PhD in Computer Science, passionate about intelligent solutions.",
      skills: ["Python", "TensorFlow", "IoT", "ML"],
      social: {
        linkedin: "#",
        twitter: "#", 
        github: "#"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Design Director",
      avatar: "/api/placeholder/300/300",
      bio: "Award-winning designer creating beautiful, user-centered digital experiences.",
      skills: ["UI/UX", "Figma", "Design Systems", "Branding"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Founding Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three passionate technologists united by a vision to create exceptional digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-8 text-center group"
            >
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <Avatar className="w-32 h-32 ring-4 ring-neon-purple/30 group-hover:ring-neon-purple/60 smooth-transition">
                    <AvatarImage src={founder.avatar} alt={founder.name} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-cyan rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {founder.name}
              </h3>
              <p className="text-neon-purple font-medium mb-4">
                {founder.role}
              </p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {founder.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {founder.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs font-medium bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href={founder.social.linkedin}
                  className="w-10 h-10 rounded-full bg-neon-purple/20 hover:bg-neon-purple/40 flex items-center justify-center smooth-transition group"
                >
                  <Linkedin className="w-5 h-5 text-neon-purple group-hover:scale-110 smooth-transition" />
                </a>
                <a
                  href={founder.social.twitter}
                  className="w-10 h-10 rounded-full bg-neon-cyan/20 hover:bg-neon-cyan/40 flex items-center justify-center smooth-transition group"
                >
                  <Twitter className="w-5 h-5 text-neon-cyan group-hover:scale-110 smooth-transition" />
                </a>
                <a
                  href={founder.social.github}
                  className="w-10 h-10 rounded-full bg-neon-pink/20 hover:bg-neon-pink/40 flex items-center justify-center smooth-transition group"
                >
                  <Github className="w-5 h-5 text-neon-pink group-hover:scale-110 smooth-transition" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Team;