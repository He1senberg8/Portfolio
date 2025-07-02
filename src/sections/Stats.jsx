import React from 'react'
import { motion } from 'motion/react'

function Stats() {
  return (
    <section className='c-space section-spacing' id='stats'>
      <h2 className='text-heading'>My Coding Stats</h2>
      <div className='grid grid-cols-1 gap-4 mt-12 lg:grid-cols-2 lg:grid-cols-2 lg:auto-rows-[14rem]'>
        {/* LeetCode Card */}
        <motion.div
          className='grid-default-color flex flex-col items-center justify-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
        >
          <img src='assets/logos/leetcode.svg' alt='LeetCode' className='w-12 h-12 mb-2'/>
          <p className='headtext'>LeetCode</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-2'>
            {/* Questions Solved */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(255, 193, 7, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-yellow-400'>800+</p>
              <p className='subtext'>Solved</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Rating */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-blue-400'>1780</p>
              <p className='subtext'>Rating</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Contests */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(168, 85, 247, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-purple-400'>40+</p>
              <p className='subtext'>Contests</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Profile Link */}
            <div className='flex flex-col items-center'>
              <motion.a
                href='https://leetcode.com/u/Heisenberg_wc/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center px-3 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600'
                whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(255, 193, 7, 0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                <span className='font-semibold text-black mr-1'>Profile</span>
                <img src='assets/logos/link.png' alt='Go to LeetCode Profile' className='w-4 h-4'/>
              </motion.a>
            </div>
        </div>
        </motion.div>
        {/* Codeforces Card */}
        <motion.div
          className='grid-black-color flex flex-col items-center justify-center overflow-hidden'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
        >
          <img src='assets/logos/code-forces.svg' alt='Codeforces' className='w-12 h-12 mb-2'/>
          <p className='headtext'>Codeforces</p>
          <div className='flex flex-row items-center justify-center gap-3 mt-2'>
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(255, 193, 7, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-yellow-400'>400+</p>
              <p className='subtext'>Solved</p>
            </motion.div>
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(168, 85, 247, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-purple-400'>20</p>
              <p className='subtext'>Contests</p>
            </motion.div>
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-blue-400'>1300+</p>
              <p className='subtext'>Rating</p>
            </motion.div>
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(34,197,94,0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-green-400'>Pupil</p>
              <p className='subtext'>Level</p>
            </motion.div>
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Profile Button for Codeforces */}
            <div className='flex flex-col items-center'>
              <motion.a
                href='https://codeforces.com/profile/Heisenberg_wc'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60'
                whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.25)' }}
                whileTap={{ scale: 0.97 }}
                title="View Codeforces Profile"
              >
                <span>Profile</span>
                <img src='assets/logos/link.png' alt='Go to Codeforces Profile' className='w-4 h-4 ml-1' />
              </motion.a>
            </div>
          </div>
        </motion.div>
        {/* AtCoder Card */}
        <motion.div
          className='grid-black-color flex flex-col items-center justify-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
        >
          <img src='assets/logos/image.png' alt='AtCoder' className='w-12 h-12 mb-2 rounded-full'/>
          <p className='headtext'>AtCoder</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-2'>
            {/* Contests */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(168, 85, 247, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-purple-400'>10</p>
              <p className='subtext'>Contests</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Level */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(34,197,94,0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-green-400'>7-Kyu</p>
              <p className='subtext'>Level</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Rating */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-blue-400'>1200</p>
              <p className='subtext'>Rating</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Profile Button for AtCoder */}
            <div className='flex flex-col items-center'>
              <motion.a
                href='https://atcoder.jp/users/Heisenberg_cp'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center px-3 py-2 rounded-full bg-gray-700 text-white font-semibold shadow-md hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400/60'
                whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(34,197,94,0.25)' }}
                whileTap={{ scale: 0.97 }}
                title="View AtCoder Profile"
              >
                <span>Profile</span>
                <img src='assets/logos/link.png' alt='Go to AtCoder Profile' className='w-4 h-4 ml-1' />
              </motion.a>
            </div>
        </div>
        </motion.div>
        {/* CodeChef Card */}
        <motion.div
          className='grid-default-color flex flex-col items-center justify-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
        >
          <img src='assets/logos/icons8-codechef.svg' alt='CodeChef' className='w-12 h-12 mb-2'/>
          <p className='headtext'>CodeChef</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-2'>
            {/* Questions Solved */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(255, 193, 7, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-yellow-400'>20+</p>
              <p className='subtext'>Solved</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Star Rating */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(34,197,94,0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-green-400'>3★</p>
              <p className='subtext'>Rating</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Contests */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(168, 85, 247, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-purple-400'>10+</p>
              <p className='subtext'>Contests</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700 mx-2'></div>
            {/* Profile Button for CodeChef */}
            <div className='flex flex-col items-center'>
              <motion.a
                href='https://www.codechef.com/users/your_username'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center px-3 py-2 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400/60'
                whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(249, 115, 22, 0.25)' }}
                whileTap={{ scale: 0.97 }}
                title="View CodeChef Profile"
              >
                <span>Profile</span>
                <img src='assets/logos/link.png' alt='Go to CodeChef Profile' className='w-4 h-4 ml-1' />
              </motion.a>
            </div>
          </div>
        </motion.div>
        {/* Codolio Card */}
        <motion.div
          className='grid-special-color flex flex-col items-center justify-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
        >
          <img src='assets/projects/d.png' alt='Codolio' className='w-12 h-12 mb-2 rounded-full'/>
          <p className='headtext'>Codolio</p>
          <div className='flex flex-col items-center mt-2'>
            <motion.a
              href='https://codolio.com/profile/PDxI0x4r'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center px-3 py-2 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60'
              whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.25)' }}
              whileTap={{ scale: 0.97 }}
              title="View Codolio Profile"
            >
              <span>Profile</span>
              <img src='assets/logos/link.png' alt='Go to Codolio Profile' className='w-4 h-4 ml-1' />
            </motion.a>
          </div>
        </motion.div>
        {/* GitHub Card */}
        <motion.div
          className='grid-special-color flex flex-col items-center justify-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
        >
          <img src='assets/logos/github.svg' alt='GitHub' className='w-12 h-12 mb-2 rounded-full'/>
          <p className='headtext'>GitHub</p>
          <div className='flex flex-col items-center mt-2'>
            <motion.a
              href='https://github.com/He1senberg8'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center px-3 py-2 rounded-full bg-gray-800 text-white font-semibold shadow-md hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black/60'
              whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.97 }}
              title="View GitHub Profile"
            >
              <span>Profile</span>
              <img src='assets/logos/link.png' alt='Go to GitHub Profile' className='w-4 h-4 ml-1' />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
