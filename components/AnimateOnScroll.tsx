'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-8');
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-600 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
