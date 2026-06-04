import { motion } from 'framer-motion';
import { ArrowDown, Scan } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  const scrollToNext = () => {
    const el = document.querySelector('#problem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-sand">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Macro soil analysis with scanning laser"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand/95 via-sand/80 to-sand/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-sand/30 via-transparent to-sand/90" />
      </div>

      {/* Scanline decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-soil/20 to-transparent" />

      {/* Left metadata gutter */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-3 text-[10px] font-mono text-muted-gray/50 tracking-widest">
        <span>LAT 24.7136°N</span>
        <span>LNG 46.6753°E</span>
        <div className="w-px h-12 bg-tech-blue/20 mx-auto" />
        <span>DEPTH 0-30cm</span>
        <span>ZONE A-04</span>
      </div>

      {/* Right metadata gutter */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 text-[10px] font-mono text-muted-gray/50 tracking-widest text-right">
        <span>SCAN ACTIVE</span>
        <span>RES 1024px</span>
        <div className="w-px h-12 bg-forest/20 mx-auto" />
        <span>NPK READY</span>
        <span>PH 6.8</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* System badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-soil/10 border border-soil/20 rounded-full mb-8"
          >
            <Scan className="w-3.5 h-3.5 text-tech-blue" />
            <span className="text-xs font-mono text-soil tracking-wider uppercase">
              Portable Soil Intelligence
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading font-black text-6xl md:text-8xl lg:text-[120px] leading-[0.9] text-soil tracking-tighter mb-6"
          >
            Geo
            <span className="text-tech-blue">Scribe</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl font-heading font-light text-soil/80 mb-4 leading-relaxed"
          >
            Before you dig, understand the ground.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-lg text-muted-gray leading-relaxed max-w-xl mb-10 font-body"
          >
            A portable soil analysis system that evaluates soil health using NPK levels,
            moisture content, and construction residue detection. Supporting better land-use
            decisions through intelligent data.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                const el = document.querySelector('#solution');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-soil text-sand text-sm font-medium rounded-md hover:bg-soil/90 transition-all hover:shadow-lg"
            >
              Explore the System
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#process');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 border border-soil/30 text-soil text-sm font-medium rounded-md hover:bg-soil/5 transition-all"
            >
              How It Works
            </button>
          </motion.div>
        </div>

  
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-gray/60 hover:text-soil transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}