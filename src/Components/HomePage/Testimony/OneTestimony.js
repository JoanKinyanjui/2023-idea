import React from 'react';
import './Testimony.css'

function OneTestimony({help}) {
    // console.log(help)
    return (
      <>
  <div key={help.id} className="testimony-div-carousel py-4 md:py-12 mb-4">
  <div className='swiper-image-div-testimony'><img className='swiper-img-testimony' src={help.src} /></div>
        <div className='grid items-center'>
<div>
<p className='testimony-person text-lg pt-1'>{help.name}</p>
<p className='testimony-career text-lg '>{help.career}</p>
</div>
          <p className='testimony-content text-base sm:text-lg text-slate-900 pb-2 md:pb-4'>{help.testimony}</p>
        </div>
  </div>
        
      </>
    )
}

export default OneTestimony