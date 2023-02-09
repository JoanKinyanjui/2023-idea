import React from 'react';
import './ProposedTherapists.css';
import {TiTick} from 'react-icons/ti'
import { Link } from 'react-router-dom';
import {RiStarSFill} from 'react-icons/ri';

function SingleTherapist({person}) {
  return (
   <>
   <Link to={person.path}>
    <div className='SingleTherapist py-2'>
        <img className='single-therapist-img' src={person.img}/>
   <div className='single-therapist-absolute'>
   </div>
   <div className='single-therapist-info'>
   <div className='flex justify-between'>
     <p className='flex'>
    <RiStarSFill className='text-green-600' />
    <RiStarSFill className='text-green-600' />
    <RiStarSFill className='text-green-600' />
    <RiStarSFill  className='text-green-600' />
    </p> 
    <p>Ksh {person.charge}</p></div>
    <p>{person.name}</p>
    <p className='flex items-center'> <TiTick  className='text-green-600 '/>{person.specialization} ...</p>
   </div>
    </div>
    </Link>
    </>
  )
}

export default SingleTherapist