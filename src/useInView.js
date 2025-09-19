import { useEffect, useState, useRef } from "react";

export function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}
