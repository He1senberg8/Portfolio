import React,{useState} from 'react'
import { AnimatePresence, motion } from "motion/react"


function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    const email = "nathpallab2004@gmail.com"

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
  return (
    <motion.button
    onClick = {handleCopy}
    whileHover={{y:-5,scale:1.05}}
    whileTap = {{scale:1.05}}
    className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'
    >
    <AnimatePresence mode="wait">
    {copied ? (
        <motion.p
        className='flex items-center justify-center gap-2'
        key ="copied"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.1,ease:"easeInOut" }}
        >
            <img src="assets/copy-done.svg" alt="Copy Icon" className='w-5' />
            Email Copied</motion.p>
    ) : (
        <motion.p
        className='flex items-center justify-center gap-2'
        key ="copy"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.1,ease:"easeInOut" }}
        >
            <img src="assets/copy.svg" alt="Copy Icon" className='w-5'/>
            Copy Email Adress</motion.p>
    )}
    </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton
