import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-background/50 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-4">
              Trivora
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building the future of web technology with innovative solutions in web applications, 
              AI integration, IoT, and cutting-edge design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neon-purple/20 hover:bg-neon-purple/40 flex items-center justify-center smooth-transition"
              >
                <Github className="w-5 h-5 text-neon-purple" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neon-cyan/20 hover:bg-neon-cyan/40 flex items-center justify-center smooth-transition"
              >
                <Linkedin className="w-5 h-5 text-neon-cyan" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neon-pink/20 hover:bg-neon-pink/40 flex items-center justify-center smooth-transition"
              >
                <Twitter className="w-5 h-5 text-neon-pink" />
              </a>
              <a
                href="mailto:hello@trivora.com"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 flex items-center justify-center smooth-transition"
              >
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Team', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Applications</li>
              <li>UI/UX Design</li>
              <li>AI Integration</li>
              <li>IoT Solutions</li>
              <li>WordPress Development</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Trivora. All rights reserved. Built with passion and cutting-edge technology.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 hover:bg-white/10"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
    </footer>
  );
};

export default Footer;