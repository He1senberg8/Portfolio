import React from 'react'
import { Toaster } from 'react-hot-toast';
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Stats from './sections/Stats'
import Contact from './sections/Contact'
import Work from './components/Work.jsx'

function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Stats></Stats>
      <Contact></Contact>

    </div>
  )
}

export default App
