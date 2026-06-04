import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beaker, Leaf, Activity } from 'lucide-react';

const pillars = [
  {
    icon: Beaker,
    title: 'NPK Analysis',
    desc: 'Measures Nitrogen, Phosphorus, and Potassium levels to determine soil nutrient profile.',
    color: 'text-tech-blue',
    bg: 'bg-tech-blue/10',
    border: 'border-tech-blue/20',
  },
  {
    icon: Activity,
    title: 'Moisture & Residue',
    desc: 'Detects water content and construction residue that could compromise soil integrity.',
    color: 'text-forest',
    bg: 'bg-forest/10',
    border: 'border-forest/20',
  },
  {
    icon: Leaf,
    title: 'Plant Recommendation',
    desc: 'AI processes all data to suggest optimal plant species for the analyzed conditions.',
    color: 'text-soil',
    bg: 'bg-soil/10',
    border: 'border-soil/20',
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="relative bg-sand py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-forest" />
          <span className="text-xs font-mono text-forest uppercase tracking-[0.2em]">
            The Solution
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-soil leading-[1.05] tracking-tight"
          >
            How GeoScribe
            <br />
            <span className="text-forest">works</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-end"
          >
            <p className="text-lg text-muted-gray leading-relaxed">
              GeoScribe is a portable tool that analyzes soil using NPK levels, moisture content,
              and construction residue detection. It evaluates overall soil health and processes
              the data to recommend suitable plants for the area, improving soil use and supporting
              healthier plant growth.
            </p>
          </motion.div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className={`group relative p-8 rounded-xl border ${pillar.border} ${pillar.bg} hover:shadow-lg transition-all duration-500`}
            >
              <div className={`w-12 h-12 rounded-lg ${pillar.bg} flex items-center justify-center mb-6`}>
                <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
              </div>
              <h3 className="font-heading font-bold text-xl text-soil mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-gray leading-relaxed">{pillar.desc}</p>

              {/* Technical detail */}
              <div className="mt-6 pt-4 border-t border-soil/5">
                <span className="text-[10px] font-mono text-muted-gray/60 uppercase tracking-widest">
                  Module {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}