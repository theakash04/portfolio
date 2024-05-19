import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='w-full flex items-center justify-center py-5 px-4 flex-col gap-7'>
      <div>
        <p className='font-bold text-3xl'>Heighlight Projects</p>
      </div>
      <div className='w-3/4'>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects
