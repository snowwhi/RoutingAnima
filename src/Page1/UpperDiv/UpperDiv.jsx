import '../../App.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function UpperDiv() {
    const containerRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })
    
    // Transform values
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.15])
    const y = useTransform(scrollYProgress, [0, 1], [0, -400])
    const x = useTransform(scrollYProgress, [0, 1], [0, -600])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
    
    return (
        <div ref={containerRef} className='h-1/2 w-full bg-white flex items-center justify-center rounded-b-4xl relative'>
            <motion.h1 
                style={{ scale, y, x, opacity }}
                className='text-black text-8xl lg:text-[180px] font-stretch-extra-expanded font-extrabold'
            >
                SAPFORCE.
            </motion.h1>
        </div>
    )
}

export default UpperDiv