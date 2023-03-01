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
              <p className='font-normal sm:font-semibold ' >Connect  with us on</p>
              <p className='mx-auto'> <FaInstagramSquare className='text-2xl sm:text-4xl'  /></p>
            </div>
        </div>
        <div className='blog-sub-div place-self-center animate__animated  animate__heartBeat  animate__repeat-2 '>
        <img  className='connect-social-media' src='/images/tiktok.jpg'/>
        <div className='connect-blend'></div>
        <div className='connect-social-icon grid  items-center place-content-center w-full h-full'>
              <p  className='font-normal sm:font-semibold '>Connect  with us on</p>
              <p className='mx-auto'> <FaTiktok className='text-2xl sm:text-4xl' /></p>
            </div>
        </div>
        <div className='blog-sub-div place-self-end sm:place-self-end animate__animated animate__fadeInUp animate__delay-1s'>
        <img  className='connect-social-media' src='https://images.pexels.com/photos/7148409/pexels-photo-7148409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div className='connect-blend'></div>
        <div className='connect-social-icon grid  items-center place-content-center w-full h-full'>
              <p  className='font-normal sm:font-semibold '>Connect  with us on</p>
              <p className='mx-auto'> <FaFacebook  className='text-2xl sm:text-4xl' /></p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default BlogHero