import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../assets/Live chatbot.json';

export default function Animation() {
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

  return (
    <div className="min-h-screen">  
      {/* Scroll-driven Lottie Section */}
      <div ref={containerRef} className=" absolute ">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ opacity, scale }}
            className="relative w-full  px-4"
          >
            <div className="absolute inset-0 blur-3xl opacity-30 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"></div>
            
            {/* Lottie Animation */}
            <div className="relative w-full aspect-square">
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                autoplay={false}
                loop={false}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}