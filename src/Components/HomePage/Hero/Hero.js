import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import video from '../../../assets/videos/pexels-alex-green-5697348.mp4'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './Hero.css';
import '../Home.css';
import {FaRibbon} from 'react-icons/fa';
import 'animate.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
    <Box className='heroParent w-screen'>
        <video className = 'bgVideo' autoPlay muted loop >
            <source src={video} type='video/mp4' />
            Your browser is not supported
        </video>
    </Box>
    <Box className=''>
    <div className='CenterCaption flex '>
<div className='CenterCaption-div flex'>
<p className='Center-phrase font-semibold text-lg sm:text-3xl md:text-4xl lg:text-5xl animate__animated animate__fadeIn'>The world's Largest online Therapy Service</p>
    <p className='text-white mx-2  text-xl sm:text-4xl  md:text-4xl lg:text-5xl self-center  animate__animated animate__fadeIn'><FaRibbon /></p>
</div>
</div>
<Link to='/services' >
<div className='CenterButton'>
   <button className='Explore-button px-2 py-1 sm:px-8 md:px-10  sm:py-4 md:py-6 text-sm sm:text-lg md:text-xl text-white'>Explore Our Services</button>
</div>
</Link>
    </Box>
    </>
  )
}

export default Hero