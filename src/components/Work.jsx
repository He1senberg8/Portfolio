import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const techStack = [
  { name: 'MongoDB', icon: '/assets/logos/mongodb.svg' },
  { name: 'Express', icon: '/assets/logos/express.svg' },
  { name: 'React', icon: '/assets/logos/react.svg' },
  { name: 'Node.js', icon: '/assets/logos/nodejs.svg' },
  { name: 'Socket.IO', icon: '/assets/logos/socketio.svg' },
  { name: 'TailwindCSS', icon: '/assets/logos/tailwindcss.svg' },
];

export default function Work() {
  const [showMoreSocketly, setShowMoreSocketly] = useState(false);
  const [showMoreMediaMorph, setShowMoreMediaMorph] = useState(false);
  const [activeImage, setActiveImage] = useState('login'); // 'login' | 'light' | 'dark'
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      {/* Socketly Section */}
      <section id="projects" className="section-spacing c-space flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl bg-gradient-to-br from-midnight to-navy rounded-3xl shadow-lg p-8 flex flex-col items-center border border-white/5">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(92,51,204,0.5))" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-heading mb-4 text-center font-extrabold tracking-tight bg-gradient-to-r from-white via-lavender to-royal bg-clip-text text-transparent cursor-default"
          >
            Socketly
          </motion.h1>

          {/* Tech Stack Dock Capsule */}
          <div className="flex flex-wrap gap-5 justify-center mb-8 px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md shadow-2xl">
            {techStack.map((tech) => {
              // Custom brand glows on hover
              const hoverGlow = {
                'MongoDB': 'group-hover:shadow-[0_0_20px_rgba(87,219,150,0.25)] group-hover:border-mint/30',
                'Express': 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:border-white/20',
                'React': 'group-hover:shadow-[0_0_20px_rgba(51,194,204,0.25)] group-hover:border-aqua/30',
                'Node.js': 'group-hover:shadow-[0_0_20px_rgba(87,219,150,0.25)] group-hover:border-mint/30',
                'Socket.IO': 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:border-white/20',
                'TailwindCSS': 'group-hover:shadow-[0_0_20px_rgba(51,194,204,0.25)] group-hover:border-aqua/30',
              }[tech.name] || 'group-hover:shadow-[0_0_20px_rgba(92,51,204,0.25)] group-hover:border-royal/30';

              return (
                <div key={tech.name} className="flex flex-col items-center group cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl bg-storm/30 border border-white/5 p-2.5 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-md ${hoverGlow}`}>
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-md" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 mt-2 group-hover:text-neutral-200 transition-colors duration-250">{tech.name}</span>
                </div>
              );
            })}
          </div>

          {/* Interactive Screenshot Showcase */}
          <div className="w-full max-w-md mb-6 flex flex-col items-center">
            <div
              onClick={() => {
                const currentImg = activeImage === 'login'
                  ? '/assets/projects/socketly-login.png'
                  : activeImage === 'light'
                    ? '/assets/projects/socketly-chat-light.png'
                    : '/assets/projects/socketly-chat-dark.png';
                setLightboxImage(currentImg);
              }}
              className="group relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-video bg-midnight/80 flex items-center justify-center cursor-zoom-in hover:border-royal/50 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={
                    activeImage === 'login'
                      ? '/assets/projects/socketly-login.png'
                      : activeImage === 'light'
                        ? '/assets/projects/socketly-chat-light.png'
                        : '/assets/projects/socketly-chat-dark.png'
                  }
                  alt={`Socketly ${activeImage}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Zoom Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-light backdrop-blur-[2px]">
                <svg className="w-5 h-5 text-royal animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                Click to Zoom
              </div>
            </div>

            {/* Tab Switched Pills */}
            <div className="flex gap-2 mt-4 p-1 bg-midnight/80 backdrop-blur-md rounded-full border border-white/10">
              {[
                { id: 'login', label: 'Login Screen' },
                { id: 'light', label: 'Light Chat' },
                { id: 'dark', label: 'Dark Chat' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveImage(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-250 ${activeImage === tab.id
                    ? 'bg-royal text-white shadow-md shadow-royal/35 scale-105'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <p className="subtext text-center mb-6 max-w-xl leading-relaxed text-pretty">
            Developed a secure, event-driven real-time chat application utilizing the MERN (MongoDB, Express, React, Node.js) architecture. Integrated bi-directional WebSockets via Socket.IO to enable instant messaging, stateful online/offline user presence tracking, and latency-optimized typing indicators. Deployed using an automated CI/CD pipeline on Render with secure, environment-controlled configurations and persistent MongoDB document storage for historical chat logging.
          </p>

          {/* Action Buttons with sleek glassmorphism and subtle glowing borders */}
          <div className="flex flex-wrap gap-4 justify-center mt-2 w-full">
            <button
              className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-royal/10 hover:border-royal/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(92,51,204,0.25)] flex items-center justify-center gap-2 cursor-pointer min-w-[9rem]"
              onClick={() => setShowMoreSocketly((prev) => !prev)}
            >
              <span>{showMoreSocketly ? 'Show Less' : 'Read More'}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${showMoreSocketly ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a
              href="https://github.com/He1senberg8/Socketly"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] flex items-center justify-center gap-2 cursor-pointer min-w-[9rem]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub Repo
            </a>
            <a
              href="https://socketchat-x.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-mint/10 hover:border-mint/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(87,219,150,0.25)] flex items-center justify-center gap-2 cursor-pointer min-w-[9rem]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>

          <AnimatePresence>
            {showMoreSocketly && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden w-full"
              >
                <div className="mt-6 bg-gradient-to-br from-indigo/20 to-midnight rounded-xl p-5 border border-white/5 text-neutral-300 text-sm shadow-inner max-w-xl mx-auto">
                  <ul className="space-y-3 text-left">
                    {[
                      "Implemented real-time features like instant messaging, typing indicators, and user status indicators using WebSockets and Socket.IO.",
                      "Designed a responsive user interface with React and Tailwind CSS featuring multiple premium pre-built color themes.",
                      "Deployed server-side components securely on Render with environment-based settings and session database persistence."
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-mint mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Media Morph Section */}
      <section className="section-spacing c-space flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl bg-gradient-to-br from-midnight to-navy rounded-3xl shadow-lg p-8 flex flex-col items-center border border-white/5 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(92,51,204,0.5))" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-heading mb-4 text-center font-extrabold tracking-tight bg-gradient-to-r from-white via-lavender to-royal bg-clip-text text-transparent cursor-default"
          >
            Media Morph
          </motion.h1>

          {/* Tech Stack Dock Capsule for Media Morph */}
          <div className="flex flex-wrap gap-5 justify-center mb-8 px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md shadow-2xl">
            {[
              { name: 'Next.js', icon: '/assets/logos/nextjs.svg' },
              { name: 'TypeScript', icon: '/assets/logos/typescript.svg' },
              { name: 'React', icon: '/assets/logos/react.svg' },
              { name: 'TailwindCSS', icon: '/assets/logos/tailwindcss.svg' },
              { name: 'Cloudinary', icon: '/assets/logos/cloudinary.svg' },
            ].map((tech) => {
              // Custom brand glows on hover
              const hoverGlow = {
                'Next.js': 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:border-white/20',
                'TypeScript': 'group-hover:shadow-[0_0_20px_rgba(49,120,198,0.25)] group-hover:border-indigo-400/30',
                'React': 'group-hover:shadow-[0_0_20px_rgba(51,194,204,0.25)] group-hover:border-aqua/30',
                'TailwindCSS': 'group-hover:shadow-[0_0_20px_rgba(51,194,204,0.25)] group-hover:border-aqua/30',
                'Cloudinary': 'group-hover:shadow-[0_0_20px_rgba(243,112,42,0.25)] group-hover:border-orange-500/30',
              }[tech.name] || 'group-hover:shadow-[0_0_20px_rgba(92,51,204,0.25)] group-hover:border-royal/30';

              return (
                <div key={tech.name} className="flex flex-col items-center group cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl bg-storm/30 border border-white/5 p-2.5 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-md ${hoverGlow}`}>
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-md" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 mt-2 group-hover:text-neutral-200 transition-colors duration-250">{tech.name}</span>
                </div>
              );
            })}
          </div>

          <div
            onClick={() => setLightboxImage('/assets/projects/media-morph.jpg')}
            className="group relative w-full max-w-md mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-lg cursor-zoom-in hover:border-royal/50 transition-all duration-300"
          >
            <img
              src="/assets/projects/media-morph.jpg"
              alt="Media Morph Screenshot"
              className="w-full h-auto object-cover"
            />
            {/* Zoom Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-light backdrop-blur-[2px]">
              <svg className="w-5 h-5 text-royal animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              Click to Zoom
            </div>
          </div>

          <p className="subtext text-center mb-6 max-w-xl leading-relaxed">
            Built a media transformation tool using Next.js and TypeScript, serving as a wrapper around Cloudinary APIs.<br />
            Users can upload, preview, and apply real-time transformations to images and videos.<br />
            Features advanced manipulation like cropping, filters, and format conversion, with a smooth, responsive UI.
          </p>

          {/* Action Buttons for Media Morph */}
          <div className="flex flex-wrap gap-4 justify-center mt-2 w-full">
            <button
              className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-royal/10 hover:border-royal/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(92,51,204,0.25)] flex items-center justify-center gap-2 cursor-pointer min-w-[9rem]"
              onClick={() => setShowMoreMediaMorph((prev) => !prev)}
            >
              <span>{showMoreMediaMorph ? 'Show Less' : 'Read More'}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${showMoreMediaMorph ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a
              href="https://github.com/He1senberg8/media-morph"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] flex items-center justify-center gap-2 cursor-pointer min-w-[9rem]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub Repo
            </a>
          </div>

          <AnimatePresence>
            {showMoreMediaMorph && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden w-full"
              >
                <div className="mt-6 bg-gradient-to-br from-indigo/20 to-midnight rounded-xl p-5 border border-white/5 text-neutral-300 text-sm shadow-inner max-w-xl mx-auto">
                  <ul className="space-y-3 text-left">
                    {[
                      "Built a media transformation tool using Next.js and TypeScript, serving as a wrapper around Cloudinary APIs.",
                      "Allows users to upload, preview, and apply real-time transformations to images and videos.",
                      "Integrated Cloudinary SDK for advanced manipulation features like cropping, filters, and format conversion.",
                      "Designed a responsive UI with smooth UX for media uploads and transformations."
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-mint mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-midnight/80"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            >
              <img
                src={lightboxImage}
                alt="Enlarged Project Screenshot"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white cursor-pointer transition-colors"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
