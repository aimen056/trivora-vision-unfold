import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation configurations
export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
  },
  ease: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
    spring: "power3.inOut",
  },
  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  }
};

// Text reveal animation using GSAP
export const animateTextReveal = (element: HTMLElement, options?: {
  duration?: number;
  stagger?: number;
  delay?: number;
}) => {
  const chars = element.textContent?.split('') || [];
  element.innerHTML = chars.map(char => 
    char === ' ' ? '<span>&nbsp;</span>' : `<span>${char}</span>`
  ).join('');

  const spans = element.querySelectorAll('span');
  
  gsap.fromTo(spans, {
    y: 100,
    opacity: 0,
    rotationX: -90,
  }, {
    y: 0,
    opacity: 1,
    rotationX: 0,
    duration: options?.duration || 0.8,
    stagger: options?.stagger || 0.02,
    delay: options?.delay || 0,
    ease: "power3.out",
  });
};

// Parallax scroll effect
export const createParallaxEffect = (element: HTMLElement, speed: number = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
};

// Magnetic effect for buttons
export const createMagneticEffect = (element: HTMLElement, strength: number = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Morphing blob animation (simplified version without anime.js)
export const createMorphingBlob = (element: HTMLElement) => {
  // For now, using GSAP for simple morphing effects
  const morphAnimation = gsap.timeline({ repeat: -1, yoyo: true });
  
  morphAnimation
    .to(element, {
      scale: 1.1,
      rotation: 5,
      duration: 2,
      ease: "sine.inOut"
    })
    .to(element, {
      scale: 0.9,
      rotation: -5,
      duration: 2,
      ease: "sine.inOut"
    });

  return morphAnimation;
};

// Loading screen animation
export const createLoadingAnimation = (element: HTMLElement) => {
  const tl = gsap.timeline();
  
  tl.to(element, {
    scaleY: 0,
    transformOrigin: "top",
    duration: 1.5,
    ease: "power4.inOut",
  })
  .to(element, {
    display: "none",
    duration: 0
  });

  return tl;
};

// Card stack reveal animation
export const animateCardStack = (cards: NodeListOf<Element>) => {
  gsap.fromTo(cards, {
    y: 60,
    opacity: 0,
    scale: 0.8,
    rotation: () => gsap.utils.random(-5, 5)
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: cards[0] as Element,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
};

// Liquid button hover effect
export const createLiquidButton = (button: HTMLElement) => {
  const liquid = document.createElement('div');
  liquid.className = 'absolute inset-0 rounded-md overflow-hidden pointer-events-none';
  liquid.innerHTML = `
    <div class="absolute inset-0 bg-gradient-primary transform scale-x-0 origin-left transition-transform duration-300"></div>
  `;
  
  button.style.position = 'relative';
  button.appendChild(liquid);

  const liquidBg = liquid.querySelector('div') as HTMLElement;

  button.addEventListener('mouseenter', () => {
    gsap.to(liquidBg, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(liquidBg, {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  });
};

// Number counter animation
export const animateCounter = (element: HTMLElement, target: number, duration: number = 2) => {
  const obj = { value: 0 };
  
  gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toString();
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
};

// Page transition animations
export const pageTransitions = {
  fadeIn: (element: HTMLElement) => {
    gsap.fromTo(element, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  },
  
  slideUp: (element: HTMLElement) => {
    gsap.fromTo(element, {
      y: '100%',
      opacity: 0
    }, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });
  },
  
  scaleIn: (element: HTMLElement) => {
    gsap.fromTo(element, {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    });
  }
};