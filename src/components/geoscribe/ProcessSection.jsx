import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScanLine, BarChart3, Sprout } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: ScanLine,
    title: 'Scan Soil',
    desc: 'Place GeoScribe sensors on the target soil sample to collect raw environmental data including NPK levels, moisture, and residue composition.',
    detail: 'Duration: ~3 seconds per scan',
    color: 'text-tech-blue',
    glow: 'glow-blue',
  },
  {
    num: '02',
    icon: BarChart3,
    title: 'Analyze',
    desc: 'The onboard system processes multi-spectral data, evaluating nutrient ratios, water retention capacity, and contamination levels against optimal thresholds.',
    detail: 'Processing: Real-time',
    color: 'text-forest',
    glow: 'glow-green',
  },
  {
    num: '03',
    icon: Sprout,
    title: 'Recommend',
    desc: 'AI algorithms cross-reference soil conditions with a plant compatibility database to suggest species that will thrive in the analyzed environment.',
    detail: 'Database: 500+ species',
    color: 'text-light-green',
    glow: 'glow-green',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative bg-sand py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-tech-blue" />
          <span className="text-xs font-mono text-tech-blue uppercase tracking-[0.2em]">
            Workflow
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-soil leading-[1.05] tracking-tight mb-6"
        >
          Simple 3-step
          <br />
          <span className="text-tech-blue">process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-gray leading-relaxed max-w-2xl mb-16"
        >
          From raw soil to actionable intelligence in under a minute. 
          GeoScribe transforms complex geochemical data into clear, practical recommendations.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px">
                  <div className="w-full h-px bg-gradient-to-r from-soil/20 via-tech-blue/30 to-soil/20" />
                </div>
              )}

              <div className={`relative p-8 rounded-xl bg-card border border-soil/10 hover:border-tech-blue/30 transition-all duration-500 ${step.glow} hover:shadow-xl`}>
                {/* Step number */}
                <span className="text-[80px] font-heading font-black text-soil/5 absolute top-2 right-4 leading-none select-none">
                  {step.num}
                </span>

                <div className={`w-14 h-14 rounded-xl bg-sand border border-soil/10 flex items-center justify-center mb-6`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>

                <h3 className="font-heading font-bold text-2xl text-soil mb-3">{step.title}</h3>
                <p className="text-sm text-muted-gray leading-relaxed mb-6">{step.desc}</p>

                <div className="pt-4 border-t border-soil/5">
                  <span className="text-[10px] font-mono text-tech-blue uppercase tracking-widest">
                    {step.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}