import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
  const containerRef = useRef(null);
  const lottieRef = useRef(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Update Lottie animation based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (lottieRef.current) {
        const totalFrames = lottieRef.current.getDuration(true);
        const frame = latest * totalFrames;
        lottieRef.current.goToAndStop(frame, true);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Transform values for parallax effects
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
function Screen() {
    return(<>
     {/* Feature Section 2 */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-linear-to-b from-transparent to-blue-950/30">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Powered by Framer Motion
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Using Framer Motion's useScroll hook combined with Lottie's 
              goToAndStop method, we can create buttery-smooth animations 
              that respond to user interaction.
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
                  viewport={{ once: true }}
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
    </>)
}
export default Screen