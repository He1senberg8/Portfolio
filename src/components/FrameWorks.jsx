import React from 'react'
import { OrbitingCircles } from "../UI/OrbitingCircles.jsx"

function FrameWorks() {
    const skills = [
        "authO",
        "blazor",
        "cplusplus",
        "css3",
        "dotnet",
        "dotnetcore",
        "git",
        "html5",
        "javascript",
        "react",
        "vitejs",
        "tailwindcss",
        "csharp",
        "sqlite"
    ]
  return (
    <div className='relative flex h-[15rem] w-full flex-col items-center justify-center'>
      <OrbitingCircles iconSize={40}>
        {
        skills.map((skill , index ) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))
        }
      </OrbitingCircles >
      <OrbitingCircles iconSize={25} radius={100} speed={2} reverse>
        {
            skills.reverse().map((skill , index ) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`}  />
            ) )
        }
      </OrbitingCircles >
    </div>
  )
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
)

export default FrameWorks
