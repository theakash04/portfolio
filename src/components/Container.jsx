import React from 'react'

function Container({children, className, ...props}) {
  return (
    <div className={`w-screen h-screen bg-[#1c1e21] text-white ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
