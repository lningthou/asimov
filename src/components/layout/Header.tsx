import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-sm bg-[var(--bg)]/80 border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Logo - lowercase wordmark */}
          <Link to="/" className="flex items-center group">
            <div className="text-2xl font-bold text-primary">
              asimov
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
