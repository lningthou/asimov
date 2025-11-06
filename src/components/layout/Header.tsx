import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Search', href: '/search' },
    { label: 'Docs', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 glass border-b border-[var(--border)]">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="text-2xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Asimov
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                  {currentPath === item.href && (
                    <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[var(--accent)]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                className="hidden md:inline-flex bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent)]/90 shadow-lg shadow-[var(--glow-purple)]"
                size="sm"
              >
                Request Data
              </Button>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} navItems={navItems} />
    </>
  );
}
