import { useEffect, useRef } from "react";

export const useScrollAnimation = (threshold: number = 0.8) => {
  const elementRefs = useRef<(HTMLElement | null)[]>([]);

  const addScrollAnimationRef = (el: HTMLElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "-150px" }
    );

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return addScrollAnimationRef;
};
