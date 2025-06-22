import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'

function Hero() {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
    </section>
  )
}

export default Hero
