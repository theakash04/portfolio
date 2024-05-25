import React from 'react'

function Container({children, className, ...props}) {
  return (
    <div className={`w-screen h-full bg-[#1c1e21] text-white backdrop-blur-md overflow-x-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
