import React from 'react';
import "./Blog.css";
import 'animate.css';
import {FaInstagramSquare,FaTiktok,FaFacebook} from 'react-icons/fa'

function BlogHero() {
  return (
    <div className='Blog-Hero grid items-center '>
       <div className='w-screen h-full gradient-div'></div>
     <div className='animation-div w-screen md:w-11/12 justify-self-center h-full grid items-center'>
     <div className='blog-sub-div    place-self-start sm:place-self-start animate__animated animate__fadeInDown animate__delay-1s'>
            <img  className='connect-social-media' src='/images/insta2.jpg'/>
            <div className='connect-blend'></div>
            <div className='connect-social-icon grid  items-center place-content-center w-full h-full'>
              <p className='font-semibold' >Connect  with us on</p>
              <p className='mx-auto'> <FaInstagramSquare className='text-4xl'  /></p>
            </div>
        </div>
        <div className='blog-sub-div place-self-center animate__animated animate__rotateIn animate__delay-2s'>
        <img  className='connect-social-media' src='/images/tiktok.jpg'/>
        <div className='connect-blend'></div>
        <div className='connect-social-icon grid  items-center place-content-center w-full h-full'>
              <p  className='font-semibold'>Connect  with us on</p>
              <p className='mx-auto'> <FaTiktok className='text-4xl' /></p>
            </div>
        </div>
        <div className='blog-sub-div place-self-end sm:place-self-end animate__animated animate__fadeInUp animate__delay-1s'>
        <img  className='connect-social-media' src='/images/linkedIn.jpg'/>
        <div className='connect-blend'></div>
        <div className='connect-social-icon grid  items-center place-content-center w-full h-full'>
              <p  className='font-semibold'>Connect  with us on</p>
              <p className='mx-auto'> <FaFacebook  className='text-4xl' /></p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default BlogHero