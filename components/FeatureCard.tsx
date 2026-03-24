'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-500 ease-out bg-white border border-[#e2e8f0] rounded-2xl p-8 hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-5">
        {icon}
      </div>
      <h3 className="text-[20px] font-semibold text-[#0f172a] mb-3">{title}</h3>
      <p className="text-[16px] text-[#64748b] leading-relaxed">{description}</p>
    </div>
  );
}
