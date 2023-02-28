import React from 'react';
import './Stories.css';
import '../Events/Events.css';
import {MdOutlinePlayCircleOutline} from 'react-icons/md'

function Stories() {
  return (
    <div className='Stories items-center py-8 md:py-16'>
<div className='flex justify-between w-full px-1 md:w-5/6 mx-auto items-center'>
<div className='grid text-xl sm:text-3xl md:text-4xl lg:text-5xl justify-items-start'>
    <p className='iish-text text-black'>Beautiful Stories from </p> 
    <p className='text-green-600'> Client's Experience</p>
</div>
<div className='WatchMore-events flex text-xs sm:text-base md:text-md items-center place-content-center'>
    View More Stories
</div>
</div>



<div className='Stories-videos py-8 items-center'>
<div className='video-watch-1'>
    <div className='play-video flex place-content-center items-center'>
        <p className='text-6xl font-black text-white'><MdOutlinePlayCircleOutline /></p>
    </div>
<img  src='/images/pexels-andrea-piacquadio-3967017.jpg' className='w-11/12 xs:w-5/6 md:3/4 mx-auto md:ml-auto h-full'/>
</div>
<div className='video-watch-2'>
    <div className='individual-suggested-video'>
        <img src='/images/veteran.jpg' className='individual-suggested-video-img' />
    </div>
    <div className='individual-suggested-video'>
        <img src='/images/pexels-juan-vargas-6332273.jpg' className='individual-suggested-video-img' />
    </div>
    <div className='individual-suggested-video'>
        <img src='/images/pexels-anna-shvets-3746281.jpg' className='individual-suggested-video-img' />
    </div>
   
</div>
</div>

    </div>
  )
}

export default Stories