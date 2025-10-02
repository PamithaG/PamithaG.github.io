import { useEffect, useState, useRef } from 'react';

export const useScrollAnimation = <T extends HTMLElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (element) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold: 0.1, // Start animation when 10% of the element is visible
      }
    );

    if (element) {
      observer.observe(element);
    }

    // Cleanup observer on component unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animationClasses = `transition-all duration-700 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  return { ref, animationClasses };
};
