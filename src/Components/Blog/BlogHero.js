import React from 'react';
import "./Blog.css";
import 'animate.css';

function BlogHero() {
  return (
    <div className='Blog-Hero grid items-center '>
       <div className='w-screen h-full gradient-div'></div>
     <div className='animation-div w-screen h-full grid items-center'>
     <div className='blog-sub-div  place-self-center sm:place-self-start animate__animated animate__fadeInDown animate__delay-1s'>
            Hae
        </div>
        <div className='blog-sub-div place-self-center animate__animated animate__fadeIn animate__delay-4s'>
            Hae
        </div>
        <div className='blog-sub-div place-self-center sm:place-self-end animate__animated animate__fadeInUp animate__delay-1s'>
            Hae
        </div>
     </div>
    </div>
  )
}

export default BlogHero