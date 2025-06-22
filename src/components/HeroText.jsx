import React from 'react'
import { FlipWords } from './FlipWords'
import {motion} from "motion/react"
import { delay } from 'motion'
import {TypewriterEffectSmooth} from "../UI/TypeWritter.jsx"

function HeroText() {
  const words = ["Secure","Modern","Scalable"]
  const wordsx = [
    {text:"Hi\u00A0",
      className: "text-4xl font-medium"},
    {text:"I'm\u00A0",
      className: "text-4xl font-medium"
    },
    {text:"Pallab!",
      className : "text-yellow-300 dark:text-[#FFD86F] drop-shadow-[0_0_6px_rgba(255,216,111,0.5)] text-4xl font-medium",
    }
  ]
  const variant = {
    hidden : {opacity :0 ,x:-50},
    visible : {opacity:1,x:0}
  }
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      {/*Desktop View*/}
      <div className=' flex-col hidden md:flex c-space'>
      <TypewriterEffectSmooth words={wordsx} />
      <div className='flex flex-col items-start'>
        <motion.p 
        className='text-5xl font-medium text-neutral-300'
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{delay:1.2}}
        >A Developer <br/>Dedicated to Crafting </motion.p>
        <motion.div
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{delay:1.5}}
        >
          <FlipWords words={words} className="font-black text-white text-8xl" />
        </motion.div>
        <motion.p 
        className='text-4xl  font-medium text-neutral-300'
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{delay:1.8}}
        >Web Solution</motion.p>
      </div>
      </div>

      {/*Mobile View */}
      <div className='flex flex-col space-y-6 md:hidden'>
        <TypewriterEffectSmooth words={wordsx}/>
        <div>
          <motion.p
          className='text-5xl text-neutral-300 font-black'
          variants={variant}
          initial='hidden'
          animate="visible"
          transition={{delay:1.2}}
          >Building</motion.p>
          <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{delay:1.5}}
          >
            <FlipWords words={words} className="font-bold text-white text-7xl"/>
          </motion.div>
          <motion.p
          className='text-4xl font-black text-neutral-300'
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{delay:1.8}}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default HeroText
