import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Droplets, ThermometerSun, Construction } from 'lucide-react';

const problems = [
  {
    icon: ThermometerSun,
    title: 'Rising Salinity',
    desc: 'Years of irrigation without proper monitoring increase soil salt levels, killing productive land.',
  },
  {
    icon: Droplets,
    title: 'Water Waste',
    desc: 'Without understanding soil moisture capacity, water is over-applied, leading to runoff and depletion.',
  },
  {
    icon: Construction,
    title: 'Hidden Residue',
    desc: 'Construction debris buried in soil goes undetected, contaminating the ground for decades.',
  },
];

export default function ProblemSection({ problemImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="relative bg-sand py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-tech-blue" />
          <span className="text-xs font-mono text-tech-blue uppercase tracking-[0.2em]">
            The Challenge
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-soil leading-[1.05] tracking-tight mb-8"
            >
              Why GeoScribe
              <br />
              is needed
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-gray leading-relaxed mb-12"
            >
              In many regions, soil is tested only for its current condition without understanding
              its history. Years of irrigation, construction, and environmental change can affect
              soil health—increasing salinity, reducing fertility, and lowering water retention.
              This leads to poor planting decisions, wasted water, and degraded land quality.
            </motion.p>

            <div className="space-y-6">
              {problems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-10 h-10 rounded-lg bg-soil/5 border border-soil/10 flex items-center justify-center flex-shrink-0 group-hover:bg-soil/10 transition-colors">
                    <item.icon className="w-5 h-5 text-soil/70" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-soil text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-gray leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative scanline-hover"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={problemImage}
                alt="Cracked dehydrated earth landscape"
                className="w-full h-80 md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soil/40 to-transparent" />
              {/* Scanline effect */}
              <div className="scanline-effect absolute inset-0 bg-gradient-to-r from-transparent via-tech-blue/20 to-transparent pointer-events-none" style={{ transform: 'translateX(-100%)' }} />
            </div>

            {/* HUD overlay */}
            <div className="absolute top-4 right-4 bg-sand/80 backdrop-blur-md border border-soil/10 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-destructive" />
                <span className="text-[10px] font-mono text-destructive uppercase tracking-wider">
                  Soil Degradation Detected
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}