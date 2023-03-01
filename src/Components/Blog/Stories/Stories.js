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
    <p className='text-green-600'> Client's Experiences</p>
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
{/* <div className='flex place-content-end'> */}
<img  src='https://images.pexels.com/photos/9705666/pexels-photo-9705666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-11/12 xs:w-5/6 md:3/4 mx-auto md:ml-auto h-full'/>
{/* </div> */}
</div>
<div className='video-watch-2  grid md:fleitems-center place-content-center'>
    <div className='individual-suggested-video'>
    <div className='w-full  h-full items-center  flex place-content-center individual-suggested-icon'><p className='my-auto'><MdOutlinePlayCircleOutline className='text-white  text-3xl'/></p></div>
        <div className='suggested-video-img'><img src='https://images.pexels.com/photos/4077869/pexels-photo-4077869.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className='individual-suggested-video-img h-full' /></div>
    </div>
    <div className='individual-suggested-video'>
    <div className='w-full  h-full items-center  flex place-content-center individual-suggested-icon'><p className='my-auto'><MdOutlinePlayCircleOutline className='text-white  text-3xl'/></p></div>
        <img src='https://images.pexels.com/photos/3800499/pexels-photo-3800499.jpeg?auto=compress&cs=tinysrgb&w=1600' className='individual-suggested-video-img h-full' />
    </div>
    <div className='individual-suggested-video'>
    <div className='w-full  h-full items-center  flex place-content-center individual-suggested-icon'><p className='my-auto'><MdOutlinePlayCircleOutline className='text-white  text-3xl'/></p></div>
        <img src='https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='individual-suggested-video-img  h-full' />
    </div>
   
</div>
</div>

    </div>
  )
}

export default Stories