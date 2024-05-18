import React from 'react'
import ButtonStyled from './ButtonStyled'
import { Link, NavLink, useLoaderData } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-full h-20 flex items-center justify-between sm:px-10 px-5 py-5'>
      <NavLink className='' to={'/'}>
        <img src='panda.png' alt="" className='w-14'/>
      </NavLink>
      <Link to={'#'} >
        <ButtonStyled children={"Follow me"} className="cursor-pointer" disabled/>
      </Link>
    </div>
  )
}

export default NavBar
