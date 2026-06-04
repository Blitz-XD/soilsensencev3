import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Impact', href: '#impact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sand/90 backdrop-blur-xl border-b border-soil/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-soil flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-tech-blue rounded-sm" />
          </div>
          <span className="font-heading font-bold text-lg text-soil tracking-tight">
            GeoScribe
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-mono font-medium text-muted-gray hover:text-soil transition-colors tracking-wide uppercase"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#solution')}
            className="px-5 py-2 bg-tech-blue text-white text-sm font-medium rounded-md hover:bg-tech-blue/90 transition-colors"
          >
            Explore System
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-soil"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sand/95 backdrop-blur-xl border-b border-soil/10"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-mono font-medium text-muted-gray hover:text-soil transition-colors text-left uppercase tracking-wide py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#solution')}
                className="mt-2 px-5 py-2.5 bg-tech-blue text-white text-sm font-medium rounded-md"
              >
                Explore System
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}