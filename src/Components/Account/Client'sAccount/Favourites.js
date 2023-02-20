import React from 'react';
import './ClientAccount.css';
import {RiStarSFill} from 'react-icons/ri';
import {FaMinus} from 'react-icons/fa'

function Favourites() {
  return (
<>
<div className='Favourites-Accordion mx-auto my-4'>
<div className='flex items-center'>
    <img src='/images/pexels-sora-shimazaki-5668876.jpg'  className='Favourites-img'/>
    <div className='grid Favourites-content'>
       <div className='flex items-center justify-between w-full px-2 py-1'>
       <p className='flex text-green-600'>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
       </p>
       <p className='text-green-600'><FaMinus /></p>
       </div>
        <div className='flex w-full justify-between'>
            <p className='pl-2'>Faithn Gathigia</p>
            <p className='pr-2'>ksh 200</p>
        </div>
        <p className='pl-2'>Trauma,family conflict,marriage ...</p>
    </div>
</div>
    </div>
    <div className='Favourites-Accordion mx-auto my-4'>
<div className='flex items-center'>
    <img src='/images/pexels-emmy-e-2381069.jpg'  className='Favourites-img'/>
    <div className='grid Favourites-content'>
       <div className='flex items-center justify-between w-full px-2 py-1'>
       <p className='flex text-green-600'>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
       </p>
       <p className='text-green-600'><FaMinus /></p>
       </div>
        <div className='flex w-full justify-between'>
            <p className='pl-2'>Irene Muthoni</p>
            <p className='pr-2'>ksh 1000</p>
        </div>
        <p className='pl-2'>Trauma,family conflict,marriage ...</p>
    </div>
</div>
    </div>
</>
  )
}

export default Favourites