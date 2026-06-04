import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Droplets, Sprout, Users } from 'lucide-react';

const metrics = [
  { icon: TrendingUp, value: '40%', label: 'Land Use Efficiency', sub: 'improvement average' },
  { icon: Droplets, value: '35%', label: 'Water Conservation', sub: 'reduction in waste' },
  { icon: Sprout, value: '60%', label: 'Plant Survival Rate', sub: 'increase with AI matching' },
  { icon: Users, value: '3+', label: 'Sectors Served', sub: 'farming, development, planning' },
];

export default function ImpactSection({ impactImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="relative bg-sand py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-forest" />
          <span className="text-xs font-mono text-forest uppercase tracking-[0.2em]">
            Real-World Impact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-soil leading-[1.05] tracking-tight mb-8"
            >
              Measurable
              <br />
              <span className="text-forest">impact</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-gray leading-relaxed"
            >
              GeoScribe helps improve land use efficiency, reduce water waste, and support
              healthier plant growth. It assists farmers, developers, and planners in making
              informed decisions before using land, contributing to more sustainable soil management.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-xl overflow-hidden border border-soil/10"
          >
            <img
              src={impactImage}
              alt="Flourishing regenerative farm grid from satellite view"
              className="w-full h-72 md:h-96 object-cover"
            />
          </motion.div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-soil/10 text-center group hover:border-forest/30 transition-all"
            >
              <m.icon className="w-6 h-6 text-forest mx-auto mb-3 group-hover:text-tech-blue transition-colors" />
              <div className="font-heading font-black text-3xl md:text-4xl text-soil mb-1">
                {m.value}
              </div>
              <div className="font-heading font-semibold text-sm text-soil mb-1">{m.label}</div>
              <div className="text-[10px] font-mono text-muted-gray uppercase tracking-wider">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}