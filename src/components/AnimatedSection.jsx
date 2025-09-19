import React from "react";
import { useInView } from "../useInView";

export default function AnimatedSection({ children }) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-700 ${
        isInView ? "animate-fadeSlideUp" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
}
