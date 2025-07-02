import React, { useState } from 'react';

const techStack = [
  { name: 'MongoDB', icon: '/assets/logos/cc.svg.svg' },
  { name: 'Express', icon: '/assets/logos/javascript.svg' },
  { name: 'React', icon: '/assets/logos/react.svg' },
  { name: 'Node.js', icon: '/assets/logos/javascript.svg' },
  { name: 'Socket.IO', icon: '/assets/logos/javascript.svg' },
  { name: 'TailwindCSS', icon: '/assets/logos/tailwindcss.svg' },
];

export default function Work() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <section className="section-spacing c-space flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl bg-gradient-to-br from-midnight to-navy rounded-3xl shadow-lg p-8 flex flex-col items-center">
          <h1 className="text-heading mb-2 text-center">Socketly</h1>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 rounded-lg bg-storm p-1 hover:scale-110 duration-200" />
                <span className="text-xs text-neutral-400 mt-1">{tech.name}</span>
              </div>
            ))}
          </div>
          <img
            src="/assets/projects/d.png"
            alt="Socketly Screenshot"
            className="rounded-2xl shadow-md w-full max-w-md mb-6 border border-white/10"
          />
          <p className="subtext text-center mb-4">
            Built a real-time chat app using the MERN stack and Socket.IO for instant, real-time communication.<br/>
            Features include messaging, typing indicators, online user status, and a responsive UI with multiple themes.<br/>
            Deployed on Render with secure, environment-based configuration and persistent chat history.
          </p>
          <div className="flex gap-4 mt-2">
            <button
              className="btn bg-gradient-to-r from-royal to-fuchsia text-white hover:from-fuchsia hover:to-royal"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? 'Show Less' : 'Read More'}
            </button>
            <a
              href="https://github.com/yourusername/socketly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-aqua to-mint text-white hover:from-mint hover:to-aqua flex items-center gap-2"
            >
              <img src="/assets/logos/github.svg" alt="GitHub" className="w-5 h-5" />
              GitHub Repo
            </a>
            <a
              href="https://socketly-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-orange to-coral text-white hover:from-coral hover:to-orange flex items-center gap-2"
            >
              Live Demo
            </a>
          </div>
          {showMore && (
            <div className="mt-6 bg-gradient-to-br from-storm to-indigo rounded-xl p-5 text-neutral-300 text-sm shadow-inner">
              <ul className="list-disc ml-5 space-y-2 text-left">
                <li>Implemented features like messaging, typing indicators, and online user status.</li>
                <li>Designed a responsive UI with React and Tailwind CSS with multiple themes, optimized for performance and UX.</li>
                <li>Deployed on Render with secure, environment-based configuration and persistent chat history.</li>
              </ul>
            </div>
          )}
        </div>
      </section>
      {/* Media Morph Section */}
      <section className="section-spacing c-space flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl bg-gradient-to-br from-midnight to-navy rounded-3xl shadow-lg p-8 flex flex-col items-center mt-10">
          <h1 className="text-heading mb-2 text-center">Media Morph</h1>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {/* Tech stack for Media Morph */}
            <div className="flex flex-col items-center">
              <img src="/assets/logos/nextjs.svg" alt="Next.js" className="w-10 h-10 rounded-lg bg-storm p-1 hover:scale-110 duration-200" />
              <span className="text-xs text-neutral-400 mt-1">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/logos/typescript.svg" alt="TypeScript" className="w-10 h-10 rounded-lg bg-storm p-1 hover:scale-110 duration-200" />
              <span className="text-xs text-neutral-400 mt-1">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/logos/react.svg" alt="React" className="w-10 h-10 rounded-lg bg-storm p-1 hover:scale-110 duration-200" />
              <span className="text-xs text-neutral-400 mt-1">React</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/logos/tailwindcss.svg" alt="TailwindCSS" className="w-10 h-10 rounded-lg bg-storm p-1 hover:scale-110 duration-200" />
              <span className="text-xs text-neutral-400 mt-1">TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/logos/cloudinary.svg" alt="Cloudinary" className="w-10 h-10 rounded-lg bg-storm p-1 hover:scale-110 duration-200" />
              <span className="text-xs text-neutral-400 mt-1">Cloudinary</span>
            </div>
          </div>
          <img
            src="/assets/projects/media-morph.jpg"
            alt="Media Morph Screenshot"
            className="rounded-2xl shadow-md w-full max-w-md mb-6 border border-white/10 object-cover"
          />
          <p className="subtext text-center mb-4">
            Built a media transformation tool using Next.js and TypeScript, serving as a wrapper around Cloudinary APIs.<br/>
            Users can upload, preview, and apply real-time transformations to images and videos.<br/>
            Features advanced manipulation like cropping, filters, and format conversion, with a smooth, responsive UI.
          </p>
          <div className="flex gap-4 mt-2">
            <MediaMorphReadMore />
            <a
              href="https://github.com/yourusername/media-morph"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-aqua to-mint text-white hover:from-mint hover:to-aqua flex items-center gap-2"
            >
              <img src="/assets/logos/github.svg" alt="GitHub" className="w-5 h-5" />
              GitHub Repo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Read More button and details for Media Morph
function MediaMorphReadMore() {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <>
      <button
        className="btn bg-gradient-to-r from-royal to-fuchsia text-white hover:from-fuchsia hover:to-royal"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? 'Show Less' : 'Read More'}
      </button>
      {showMore && (
        <div className="mt-6 bg-gradient-to-br from-storm to-indigo rounded-xl p-5 text-neutral-300 text-sm shadow-inner">
          <ul className="list-disc ml-5 space-y-2 text-left">
            <li>Built a media transformation tool using Next.js and TypeScript, serving as a wrapper around Cloudinary APIs.</li>
            <li>Allows users to upload, preview, and apply real-time transformations to images and videos.</li>
            <li>Integrated Cloudinary SDK for advanced manipulation features like cropping, filters, and format conversion.</li>
            <li>Designed a responsive UI with smooth UX for media uploads and transformations.</li>
          </ul>
        </div>
      )}
    </>
  );
}
