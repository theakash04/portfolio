import React from 'react'

function Container({children, className, ...props}) {
  return (
    <div className={`w-screen h-full bg-[#1c1e21] text-white backdrop-blur-md ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
