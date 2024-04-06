import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../assets/Error.svg'
import Button from '@mui/material/Button';

function ErrorPage() {
  return (
    <>
      <div className='w-screen h-screen overflow-hidden text-white'>
        <div className='flex h-full items-center flex-col justify-center'>
          <div className='pb-10'>
            <img src={error} alt="Error" />
          </div>

          <p className='text-5xl font-extrabold'>Opps!</p>
          
          <span className='py-7 text-center font-semibold text-white/70'>
            <p>We’re sorry.</p>
            <p>The page you requested could not be found.</p>
          </span>

          <div className='flex items-center justify-center w-full gap-5 sm:flex-row flex-col'>
            <Link to={'/'}>
              <Button variant='contained' color='primary'>
                Back to Homepage
              </Button>
            </Link>
            <Link to={'/start'}>
              <Button color="secondary">See Start Page</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
