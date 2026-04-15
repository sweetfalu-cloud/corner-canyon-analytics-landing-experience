import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About Us', href: '#about' },
    { name: 'Founder', href: '#founder' },
    { name: 'Careers', href: '#footer' },
  ];
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/80 dark:bg-canyon-dark/80 backdrop-blur-md py-3 border-border'
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Corner Canyon Analytics"
                  className="h-full w-full object-contain transition-transform group-hover:scale-110"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-6 w-6 rounded bg-canyon-cyan" />
              )}
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight text-foreground transition-all",
              logoError ? "ml-1" : "ml-0"
            )}>
              Corner Canyon <span className="text-canyon-cyan">Analytics</span>
            </span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-canyon-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l">
              <ThemeToggle className="relative top-0 right-0" />
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white rounded-full px-6 shadow-md shadow-canyon-blue/10 border-none transition-all hover:scale-105">
                <a href="#footer">Get Started</a>
              </Button>
            </div>
          </div>
          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle className="relative top-0 right-0" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground focus:outline-none transition-colors hover:bg-accent rounded-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b animate-in slide-in-from-top duration-300 shadow-xl overflow-hidden">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground py-3 border-b border-border last:border-none hover:text-canyon-cyan transition-colors"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full bg-gradient-primary text-white py-6 text-lg rounded-xl shadow-lg border-none">
              <a href="#footer" onClick={handleLinkClick}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}