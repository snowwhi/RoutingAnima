import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function Screen() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-[#1b1d1f]"
    >
      <div className="max-w-4xl">
        <motion.div
          style={{ opacity, scale, y }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            All the Professional <br /> Haves of a{" "}
            <motion.span
              initial={{ 
                opacity: 0, 
                y: 50
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.2
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative inline-block px-3"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 -z-10 origin-left rounded-2xl"
              />
              <span className="relative z-10">Website</span>
            </motion.span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Experience seamless animations and interactions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Smooth', desc: 'Frame-by-frame control' },
              { title: 'Responsive', desc: 'Adapts to any screen' },
              { title: 'Performant', desc: 'Optimized rendering' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Screen;