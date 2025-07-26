import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger';
  delay?: number;
  duration?: number;
  stagger?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  stagger = 0.1
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getVariants = () => {
    const baseVariants = {
      fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration, 
            delay
          }
        }
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration, delay }
        }
      },
      slideLeft: {
        hidden: { opacity: 0, x: 100 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration, delay }
        }
      },
      slideRight: {
        hidden: { opacity: 0, x: -100 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration, delay }
        }
      },
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration, 
            delay,
            type: 'spring' as const,
            stiffness: 100
          }
        }
      },
      stagger: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay
          }
        }
      }
    };
    
    return baseVariants[animation];
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;