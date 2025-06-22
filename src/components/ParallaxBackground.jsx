import React from 'react'
import { motion, useScroll , useSpring , useTransform } from "motion/react"

function ParallaxBackground() {
    const { scrollYProgress } = useScroll()
    const x = useSpring(scrollYProgress , {damping:50})
    const ma = useTransform(x,[0,0.5],["0vh","0vh"])
    const planet = useTransform(x,[0,0.5],["40%","0%"])
    const mb = useTransform(x,[0,0.5],["0vh","10vh"])
    const mc = useTransform(x,[0,0.5],["0%","0%"])
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            <div 
            className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage:"url(/assets/sky.jpg)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
            }}
            />
            <motion.div 
            className='absolute inset-0 -z-40'
            style={{
                backgroundImage:"url(/assets/mountain-3.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:ma,
            }}
            />
            <motion.div 
            className='absolute inset-0 -z-30'
            style={{
                backgroundImage:"url(assets/planets.png)",
                backgroundPosition:"center",
                backgroundSize:"cover",
                x:planet,
            }}
            />
            <motion.div 
            className='absolute inset-0 -z-20'
            style={{
                backgroundImage:"url(assets/mountain-2.png)",
                backgroundSize:"cover",
                backgroundPosition:"bottom",
                y:mb,
            }}
            />
            <motion.div 
            className='absolute inset-0 -z-10'
            style={{
                backgroundImage:"url(assets/mountain-1.png)",
                backgroundSize:"cover",
                backgroundPosition:"bottom",
                y:mc,
            }}
            />
        </div>
    </section>
  )
}

export default ParallaxBackground
