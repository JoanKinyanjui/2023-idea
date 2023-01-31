import React from 'react';
import './Home.css';
import {FaRibbon} from 'react-icons/fa'


function CarouselComponent() {
  return (
    <div className='CarouselComponent'>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active " >
      {/* <div className='carousel-item-div-2 text-8xl'>h</div> */}
    <img src="/images/pexels-antoni-shkraba-5217833.jpg" class="d-block w-100" alt="..."/>
     <div className='carousel-item-div-2'>h</div>
    </div>
    <div class="carousel-item">
    <img src='/images/pexels-polina-tankilevitch-5234578.jpg' class="d-block w-100 " alt="..." />
     <div className='carousel-item-div-2'>h</div>
    </div>
    <div class="carousel-item">
      <img src="/images/pexels-alex-green-5699457.jpg" class="d-block w-100" alt="..."/>
       <div className='carousel-item-div-2'>h</div>
    </div>
  </div>
</div>
<div className='CenterCaption flex '>
<div className='CenterCaption-div flex'>
<p className='Center-phrase font-semibold text-xl sm:text-4xl md:text-4xl lg:text-5xl'>The world's Largest online Therapy Service</p>
    <p className='text-white mx-2  text-xl sm:text-4xl  md:text-4xl lg:text-5xl self-center'><FaRibbon /></p>
</div>
</div>
<div className='CenterButton'>
    <button className='Explore-button px-2 sm:px-8 md:px-10 py-0 sm:py-2 md:py-4 text-sm sm:text-lg md:text-xl'>Explore Our Services</button>
</div>


    </div>
  )
}

export default CarouselComponent