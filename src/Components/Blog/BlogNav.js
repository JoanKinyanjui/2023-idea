import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import {BiEdit} from 'react-icons/bi'

function BlogNav() {
  return (
    <div className='BlogNav flex items-center  h-full'>
<div className='flex items-center justify-between w-screen md:w-5/6 mx-auto'>
<Link to='/'> <p className = 'fitbitName'>Better You<span className='period'>.</span></p></Link>
<Link to='/write' ><BiEdit className='text-3xl md:text-4xl text-green-600'/></Link>
</div>
    </div>
  )
}

export default BlogNav;