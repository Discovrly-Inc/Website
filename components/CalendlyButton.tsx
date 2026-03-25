'use client';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({
  text = 'Book a Demo',
  className = '',
  children,
}: CalendlyButtonProps) {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/andre-discovrly/30min',
      });
    }
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children ?? text}
    </button>
  );
}
