import { useEffect, useRef, useState, ReactNode } from "react";
import "animate.css";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: string; // Ej. 'animate__fadeInUp'
  delay?: string; // Ej. 'animate__delay-1s'
  duration?: string; // Ej. 'animate__faster', 'animate__slower'
  once?: boolean; // Si se anima solo la primera vez
}

export const AnimatedSection = ({
  children,
  animation = "animate__fadeInUp",
  delay = "",
  duration = "",
  once = true
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`${
        visible
          ? `animate__animated ${animation} ${delay} ${duration}`
          : "opacity-0"
      } transition-opacity duration-500`}
    >
      {children}
    </div>
  );
};
