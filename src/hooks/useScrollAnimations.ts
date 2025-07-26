import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical'
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger when everything is set up
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Common scroll animations
  const createScrollAnimation = (
    selector: string,
    animationProps: gsap.TweenVars,
    triggerProps?: ScrollTrigger.StaticVars
  ) => {
    return gsap.fromTo(
      selector,
      { ...animationProps.from },
      {
        ...animationProps.to,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          ...triggerProps
        }
      }
    );
  };

  const createParallaxScroll = (selector: string, speed: number = 0.5) => {
    return gsap.to(selector, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: selector,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  };

  const createPinAnimation = (selector: string, endSelector?: string) => {
    return ScrollTrigger.create({
      trigger: selector,
      start: 'top top',
      end: endSelector ? `${endSelector} bottom` : 'bottom bottom',
      pin: true,
      pinSpacing: false
    });
  };

  return {
    createScrollAnimation,
    createParallaxScroll,
    createPinAnimation
  };
};