import React from 'react'
import ButtonStyled from './ButtonStyled'
import { Link, NavLink } from 'react-router-dom'
import { ArrowBackIos, Home } from '@mui/icons-material'
import { Button } from '@mui/material'

function NavBar() {
  return (
    <div className='w-full h-20 flex items-center justify-between sm:px-10 px-5 py-5 z-auto'>
      <Link to={'https://github.com/theakash04/'} target='blank' >
        <ButtonStyled children={"Follow me"} className="cursor-pointer"/>
      </Link>
    </div>
  )
}

export default NavBar
