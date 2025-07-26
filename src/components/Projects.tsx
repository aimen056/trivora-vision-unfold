import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;

    gsap.fromTo(
      projectsRef.current.children,
      {
        y: 100,
        opacity: 0,
        scale: 0.9
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
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  // Placeholder projects - ready for real content
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI-powered recommendations and real-time inventory management.",
      category: "Web Application",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "IoT Dashboard",
      description: "Real-time monitoring dashboard for smart city infrastructure with predictive analytics.",
      category: "IoT Integration",
      tech: ["Vue.js", "Python", "IoT", "WebSockets"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Design Assistant",
      description: "Machine learning-powered design tool that generates UI components and suggests improvements.",
      category: "AI Integration",
      tech: ["React", "TensorFlow", "Python", "Figma API"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "WordPress Multi-site",
      description: "Scalable WordPress multi-site network for enterprise content management.",
      category: "WordPress",
      tech: ["WordPress", "PHP", "MySQL", "AWS"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest work and see how we transform ideas into exceptional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-glass overflow-hidden group cursor-pointer ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:flex' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  project.featured ? 'md:w-1/2' : ''
                }`}>
                  <div className="aspect-video bg-gradient-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition opacity-80"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-neon-purple/90 text-white rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 smooth-transition">
                    <Button size="sm" variant="secondary" className="glass">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="glass">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className={`p-8 ${project.featured ? 'md:w-1/2' : ''}`}>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary smooth-transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="glass">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="btn-hero">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Projects;