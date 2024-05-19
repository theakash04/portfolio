import React from 'react'

function Container({children, className, ...props}) {
  return (
    <div className={`w-screen min-h-[1000px] bg-[#1c1e21] text-white pb-16 backdrop-blur-md ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
