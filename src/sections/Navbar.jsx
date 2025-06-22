import React, { useState } from 'react'
import { easeOut, motion } from "motion/react"

const Navigation = () => {
    return (
    <ul className='nav-ul'> 
    <li className='nav-li'>
        <a href="#" className='nav-link'>Home</a>
    </li>
    <li className='nav-li'>
        <a href="#about" className='nav-link'>About</a>
    </li>
    <li className='nav-li'>
        <a href="#Projects" className='nav-link'>Projects</a>
    </li>
    <li className='nav-li'>
        <a href="#Contact" className='nav-link'>Contact</a>
    </li>
    </ul>
    );
}

function Navbar() {
    const [isOpen , setIsOpen ] = useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className = "mx-auto c-space max-w-7xl">
        <div className='flex items-center justify-between py-2 sm:py-0'>
            <a href="/" className="relative inline-block group text-xl font-bold">
            <span
                className="
                absolute inset-0
                bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
                bg-[length:200%_200%] animate-glow
                filter blur-xl opacity-75
                transition-opacity duration-400
                group-hover:opacity-0
                "
            />
            <span
                className="
                relative
                text-neutral-400
                transition-colors duration-400
                group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500
                group-hover:bg-clip-text group-hover:text-transparent
                "
            >
                {"<P/>"}
            </span>
            </a>

            <button  onClick={()=>{setIsOpen(!isOpen)}} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
                <img src={ isOpen ? "assets/close.svg":"assets/menu.svg"} alt="Nhi hain laude" className='w-6 h-6'/>
            </button>
            <nav className="hidden sm:flex">
                <Navigation />
            </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div className='block overflow-hidden text-center sm:hidden'
        initial={{opacity:0,x:-20}}
        animate={{opacity:1,x:0}}
        style={{maxHeight:"100vh"}}
        transition={{ease:easeOut,duration:1}}
        >
        <nav className="pb-5">
            <Navigation />
        </nav>
        </motion.div>
      )
      }
    </div>
  )
}

export default Navbar
