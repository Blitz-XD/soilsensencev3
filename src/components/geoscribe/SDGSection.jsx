import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Recycle, TreePine } from 'lucide-react';

const sdgs = [
  {
    num: '11',
    icon: Building2,
    title: 'Sustainable Cities & Communities',
    desc: 'Supports urban planners in evaluating land before development, ensuring soil quality for green spaces and sustainable infrastructure.',
    stat: 'Urban Soil Quality',
    statVal: 'Verified',
  },
  {
    num: '12',
    icon: Recycle,
    title: 'Responsible Consumption & Production',
    desc: 'Promotes efficient resource use by matching soil conditions to appropriate crops, reducing waste in agricultural production.',
    stat: 'Resource Efficiency',
    statVal: 'Optimized',
  },
  {
    num: '15',
    icon: TreePine,
    title: 'Life on Land',
    desc: 'Directly supports terrestrial ecosystem protection by ensuring soil health is preserved and degraded land is identified for remediation.',
    stat: 'Land Health Index',
    statVal: 'Monitored',
  },
];

export default function SDGSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-soil py-24 md:py-32 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(232,220,203,0.5) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
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
            Global Alignment
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-sand leading-[1.05] tracking-tight mb-6"
        >
          Sustainable
          <br />
          Development Goals
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-sand/60 leading-relaxed max-w-2xl mb-16"
        >
          GeoScribe aligns with the United Nations Sustainable Development Goals,
          contributing to a healthier planet through intelligent soil management.
        </motion.p>

        {/* SDG Cards — Bento grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.2 }}
              className="relative p-8 rounded-xl bg-sand/5 border border-sand/10 hover:border-light-green/30 transition-all duration-500 group glow-green"
            >
              {/* Large SDG number */}
              <div className="absolute top-4 right-6">
                <span className="font-heading font-black text-7xl text-light-green/10 leading-none group-hover:text-light-green/20 transition-colors">
                  {sdg.num}
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-light-green/10 flex items-center justify-center mb-6">
                <sdg.icon className="w-6 h-6 text-light-green" />
              </div>

              <div className="text-[10px] font-mono text-tech-blue uppercase tracking-widest mb-2">
                SDG {sdg.num}
              </div>

              <h3 className="font-heading font-bold text-xl text-sand mb-3 leading-tight">
                {sdg.title}
              </h3>

              <p className="text-sm text-sand/50 leading-relaxed mb-6">{sdg.desc}</p>

              {/* Status bar */}
              <div className="pt-4 border-t border-sand/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-sand/40 uppercase tracking-widest">
                  {sdg.stat}
                </span>
                <span className="text-[10px] font-mono text-light-green uppercase tracking-widest">
                  {sdg.statVal}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}