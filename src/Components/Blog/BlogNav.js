import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

function BlogNav() {
  return (
    <div className='BlogNav flex items-center  h-full'>
<div className='flex items-center justify-between w-screen md:w-5/6 mx-auto'>
<Link to='/'> <Typography className = 'fitbitName'>Better You<span className='period'>.</span></Typography></Link>
<div className='animate__animated animate__bounceIn animate__repeat-2'> <p className='text-green-600'>Welcome To Our Blog !</p></div>
</div>
    </div>
  )
}

export default BlogNav