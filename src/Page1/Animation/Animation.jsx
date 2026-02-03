import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../assets/Live chatbot.json';

function Animation() {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

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

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 w-full flex items-center justify-center py-10 "
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="flex items-center justify-center"
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          autoplay={false}
          loop={false}
          className="-z-20"
        />
      </motion.div>
    </div>
  );
}

export default Animation;