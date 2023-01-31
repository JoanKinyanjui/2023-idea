import React from 'react';
import './HowWeHelp.css';
import {help} from './Help'

function SwiperComponent({help}) {
  console.log(help)
  return (
    <>
<div key={help.id}>
<div className='swiper-image-div'><img className='swiper-img' src={help.src} /></div>
      <div>
        <p className='text-lg py-2'>{help.title}</p>
        <p className='text-base text-slate-600 pb-8'>Loving Each other makes iteasier. Loving Each other makes it easier Loving Each other makes it easier</p>
      </div>
</div>
      
    </>
  )
}

export default SwiperComponent