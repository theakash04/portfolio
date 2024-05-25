import React from 'react'
import Crousel from './Crousel'

function Projects() {
  return (
    <div className='w-full flex items-center justify-center py-10 px-4 flex-col gap-7'>
      <div>
        <p className='font-bold text-3xl'>Projects</p>
      </div>
      <div className='max-w-[1000px] w-full h-full'>
        <Crousel />
      </div>
    </div>
  )
}

export default Projects
