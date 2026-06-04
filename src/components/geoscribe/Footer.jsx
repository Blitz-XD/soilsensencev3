import { motion } from 'framer-motion';
import { Scan } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-dark-gray py-16 overflow-hidden">
      {/* Top strata line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-soil flex items-center justify-center group-hover:bg-tech-blue transition-colors">
              <Scan className="w-5 h-5 text-sand" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-sand block leading-none">
                GeoScribe
              </span>
              <span className="text-[10px] font-mono text-sand/40 tracking-widest uppercase">
                Soil Intelligence
              </span>
            </div>
          </button>

          {/* Nav */}
          <div className="flex flex-wrap gap-6">
            {['Problem', 'Solution', 'Features', 'Process', 'Impact'].map((label) => (
              <button
                key={label}
                onClick={() => {
                  const el = document.querySelector(`#${label.toLowerCase()}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-mono text-sand/40 hover:text-tech-blue transition-colors uppercase tracking-widest"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-sand/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-sand/30 tracking-wider">
            GeoScribe © 2026 — Smart Soil Intelligence for Sustainable Land Use
          </div>
          <div className="text-[10px] font-mono text-sand/20 tracking-widest uppercase">
            v2.1.0 • Built for the Earth
          </div>
        </div>
      </div>
    </footer>
  );
}