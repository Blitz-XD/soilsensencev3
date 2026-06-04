import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, Droplets, Building2, HeartPulse, Brain, Smartphone } from 'lucide-react';

const features = [
  { icon: FlaskConical, title: 'NPK Soil Analysis', desc: 'Precise measurement of Nitrogen, Phosphorus, and Potassium concentrations.' },
  { icon: Droplets, title: 'Moisture Detection', desc: 'Real-time water content analysis for optimal irrigation planning.' },
  { icon: Building2, title: 'Construction Residue', desc: 'Identifies hidden construction debris and contaminants in soil layers.' },
  { icon: HeartPulse, title: 'Soil Health Evaluation', desc: 'Comprehensive health score based on multiple environmental parameters.' },
  { icon: Brain, title: 'AI Plant Recommendations', desc: 'Machine learning algorithms suggest optimal plant species for conditions.' },
  { icon: Smartphone, title: 'Portable Field Design', desc: 'Compact, rugged device engineered for on-site field data collection.' },
];

export default function FeaturesSection({ deviceImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative bg-soil py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(232,220,203,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-light-green" />
          <span className="text-xs font-mono text-light-green uppercase tracking-[0.2em]">
            Capabilities
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-sand/10">
              <img
                src={deviceImage}
                alt="Tree being planted in a city environment"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating spec */}
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-soil/90 backdrop-blur-md border border-tech-blue/20 rounded-lg px-4 py-3 glow-blue">
              <div className="text-[10px] font-mono text-tech-blue uppercase tracking-widest mb-1">
                System Specs
              </div>
              <div className="text-xs font-mono text-sand/70">
                6 Sensors • 3s Scan • 0.5kg
              </div>
            </div>
          </motion.div>

          {/* Right — feature grid */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-4xl md:text-5xl text-sand leading-tight tracking-tight mb-10"
            >
              Key Features
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-lg bg-sand/5 border border-sand/10 hover:border-tech-blue/30 hover:bg-sand/10 transition-all duration-300 group"
                >
                  <f.icon className="w-5 h-5 text-light-green mb-3 group-hover:text-tech-blue transition-colors" />
                  <h3 className="font-heading font-semibold text-sm text-sand mb-1">{f.title}</h3>
                  <p className="text-xs text-sand/50 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}