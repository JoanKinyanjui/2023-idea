import React from 'react';
import './Testimony.css'

function OneTestimony({help}) {
    console.log(help)
    return (
      <>
  <div key={help.id} className="testimony-div-carousel py-24">
  <div className='swiper-image-div-testimony'><img className='swiper-img-testimony' src={help.src} /></div>
        <div className='grid items-center'>
<div>
<p className='testimony-person text-lg pt-1'>{help.title}</p>
<p className='testimony-career text-lg '>Nurse</p>
</div>
          <p className='testimony-content text-base text-slate-900 pb-4'>Loving Each other makes iteasier. Loving Each other makes it easier Loving Each other makes it easier</p>
        </div>
  </div>
        
      </>
    )
}

export default OneTestimony