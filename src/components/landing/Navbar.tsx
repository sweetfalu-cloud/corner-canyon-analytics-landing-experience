import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
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
  ];
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/90 dark:bg-canyon-dark/90 backdrop-blur-md py-3 border-border'
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Corner Canyon Analytics"
                  className="h-full w-full object-contain transition-transform group-hover:rotate-6"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-lg shadow-canyon-blue/20" />
              )}
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Corner Canyon <span className="text-canyon-cyan">Analytics</span>
            </span>
          </motion.div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-canyon-cyan transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-canyon-cyan transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l">
              <ThemeToggle className="relative top-0 right-0" />
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white rounded-full px-6 shadow-md shadow-canyon-blue/20 border-none transition-all hover:scale-105 active:scale-95">
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b shadow-xl overflow-hidden z-[60]"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  className="text-lg font-bold text-foreground py-3 border-b border-border last:border-none hover:text-canyon-cyan transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button asChild className="w-full bg-gradient-primary text-white py-6 text-lg rounded-xl shadow-lg shadow-canyon-blue/20 border-none">
                  <a href="#footer" onClick={handleLinkClick}>Get Started</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}