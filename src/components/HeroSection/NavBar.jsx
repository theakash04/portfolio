import React from 'react'
import ButtonStyled from './ButtonStyled'
import { Link, NavLink, useLoaderData } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-full h-20 flex items-center justify-between sm:px-10 px-5 py-5 z-auto'>
      <NavLink className='flex items-center gap-3' to={'/'}>
        <img src='Rick.png' alt="" className='w-14'/>
      </NavLink>
      <Link to={'https://github.com/theakash04/'} target='blank' >
        <ButtonStyled children={"Follow me"} className="cursor-pointer"/>
      </Link>
    </div>
  )
}

export default NavBar
