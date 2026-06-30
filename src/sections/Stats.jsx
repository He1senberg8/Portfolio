import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

function Stats() {
  const [stats, setStats] = useState({
    codolio: { solved: '1790+', platforms: '4', maxStreak: '230' },
    github: { repos: '8', contribs: '31', followers: '2' }
  });

  useEffect(() => {
    // Fetch Codolio stats
    fetch('https://api.codolio.com/profile?userKey=PDxI0x4r')
      .then(res => res.json())
      .then(data => {
        if (data?.status?.success && data?.data?.platformProfiles?.platformProfiles) {
          const platforms = data.data.platformProfiles.platformProfiles;
          let solvedSum = 0;
          let streakMax = 0;
          platforms.forEach(p => {
            solvedSum += p.totalQuestionStats?.totalQuestionCounts || 0;
            const streak = p.dailyActivityStatsResponse?.maxStreak || 0;
            if (streak > streakMax) streakMax = streak;
          });
          setStats(prev => ({
            ...prev,
            codolio: {
              solved: solvedSum > 0 ? `${solvedSum}+` : '1790+',
              platforms: String(platforms.length || 4),
              maxStreak: String(streakMax || 230)
            }
          }));
        }
      })
      .catch(err => console.error('Error fetching Codolio stats:', err));

    // Fetch GitHub stats
    fetch('https://api.github.com/users/He1senberg8')
      .then(res => res.json())
      .then(data => {
        if (data && data.public_repos !== undefined) {
          setStats(prev => ({
            ...prev,
            github: {
              ...prev.github,
              repos: String(data.public_repos),
              followers: String(data.followers)
          }
          }));
        }
      })
      .catch(err => console.error('Error fetching GitHub stats:', err));
  }, []);

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
          className='flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#120f26] via-[#1b123a] to-[#0c0a1a] border border-[#7a57db]/30 shadow-[0_8px_32px_rgba(122,87,219,0.15)] relative overflow-hidden'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04, borderColor: 'rgba(122,87,219,0.6)', boxShadow: '0 12px 40px rgba(122,87,219,0.25)' }}
        >
          {/* Subtle background glow */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-[#7a57db]/10 rounded-full blur-2xl pointer-events-none' />
          
          <img src='assets/projects/d.png' alt='Codolio' className='w-12 h-12 mb-2 rounded-full ring-2 ring-[#7a57db]/50 shadow-md shadow-[#7a57db]/20'/>
          <p className='headtext font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#a78bfa]'>Codolio</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-2 relative z-10'>
            {/* Solved */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(255, 193, 7, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-yellow-400'>{stats.codolio.solved}</p>
              <p className='subtext'>Solved</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700/60 mx-1'></div>
            {/* Platforms */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(34, 197, 94, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-green-400'>{stats.codolio.platforms}</p>
              <p className='subtext'>Platforms</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700/60 mx-1'></div>
            {/* Max Streak */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-blue-400'>{stats.codolio.maxStreak}</p>
              <p className='subtext'>Max Streak</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700/60 mx-1'></div>
            {/* Profile Link */}
            <div className='flex flex-col items-center'>
              <motion.a
                href='https://codolio.com/profile/PDxI0x4r'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#7a57db] to-[#5c33cc] text-white font-semibold shadow-[0_4px_14px_rgba(122,87,219,0.4)] transition-all duration-200'
                whileHover={{ scale: 1.08, boxShadow: '0 6px 20px rgba(122,87,219,0.6)' }}
                whileTap={{ scale: 0.97 }}
                title="View Codolio Profile"
              >
                <span className="text-sm">Profile</span>
                <img src='assets/logos/link.png' alt='Go to Codolio Profile' className='w-3.5 h-3.5 ml-1' />
              </motion.a>
            </div>
          </div>
        </motion.div>
        {/* GitHub Card */}
        <motion.div
          className='flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0a0d14] border border-[#30363d]/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.2)', boxShadow: '0 12px 40px rgba(0,0,0,0.7)' }}
        >
          {/* Subtle background glow */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none' />

          <img src='assets/logos/github.png' alt='GitHub' className='w-12 h-12 mb-2 rounded-full ring-2 ring-neutral-700/60 shadow-md shadow-black/40'/>
          <p className='headtext font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500'>GitHub</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-2 relative z-10'>
            {/* Repositories */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(255, 193, 7, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-yellow-400'>{stats.github.repos}</p>
              <p className='subtext'>Repos</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700/60 mx-1'></div>
            {/* Contributions */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(168, 85, 247, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-purple-400'>{stats.github.contribs}</p>
              <p className='subtext'>Contribs</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700/60 mx-1'></div>
            {/* Followers */}
            <motion.div className='flex flex-col items-center px-2 py-1 rounded-lg' whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(34, 197, 94, 0.15)' }} whileTap={{ scale: 0.97 }}>
              <p className='text-xl font-bold text-green-400'>{stats.github.followers}</p>
              <p className='subtext'>Followers</p>
            </motion.div>
            {/* Divider */}
            <div className='h-8 w-px bg-neutral-700/60 mx-1'></div>
            {/* Profile Link */}
            <div className='flex flex-col items-center'>
              <motion.a
                href='https://github.com/He1senberg8'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700/60 text-white font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-500'
                whileHover={{ scale: 1.08, boxShadow: '0 6px 20px rgba(0,0,0,0.6)' }}
                whileTap={{ scale: 0.97 }}
                title="View GitHub Profile"
              >
                <span className="text-sm">Profile</span>
                <img src='assets/logos/link.png' alt='Go to GitHub Profile' className='w-3.5 h-3.5 ml-1' />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
