import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animateTextReveal } from '@/lib/animations';

interface AnimatedTextProps {
  children: string;
  className?: string;
  animation?: 'reveal' | 'typewriter' | 'fade';
  delay?: number;
  duration?: number;
  stagger?: number;
}

const AnimatedText = ({ 
  children, 
  className = '', 
  animation = 'reveal',
  delay = 0,
  duration = 0.8,
  stagger = 0.02
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    if (animation === 'reveal') {
      animateTextReveal(textRef.current, { duration, stagger, delay });
    }
  }, [animation, delay, duration, stagger]);

  if (animation === 'typewriter') {
    return (
      <motion.span 
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.1 }}
      >
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: delay + (index * stagger),
              duration: 0.1
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (animation === 'fade') {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
};

export default AnimatedText;