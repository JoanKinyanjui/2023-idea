import React from 'react';
import './Professional.css'

function Proffessional() {
  return (
    <div className='Professionals'>
        <div className='Professional-tagline'>
            <p className='Professional-tagline-div  text-2xl sm:text-3xl md:text-4xl font-medium py-2'>Proffessional,licensed , and vetted therapists who you can trust</p>
        </div>
        <div className='para-galla'>
          
            <div className='para text-base sm:text-lg py-2 md:py-4 grid items-start md:mt-24'>Tap into the world's largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want.
            <button className='getStarted'>Get Started</button>
            </div>
            <div className='galla flex items-center'>
             <div className='galla-img-div' > <img  className='galla-img g-one' src='/images/pexels-sora-shimazaki-5668876.jpg'/></div>
             <div className='galla-img-div'><img  className='galla-img g-one' src='/images/pexels-kebs-visuals-5125172.jpg'/></div>
             <div className='galla-img-div'><img  className='galla-img g-one' src='/images/pexels-gustavo-fring-4173177.jpg'/></div>
             <div className='galla-img-div'><img  className='galla-img g-one' src='/images/pexels-george-milton-6954034.jpg'/></div>
             <div className='galla-img-div'><img  className='galla-img g-one' src='/images/pexels-katerina-holmes-5905743.jpg'/></div>
            </div>
        </div>
    </div>
  )
}

export default Proffessional