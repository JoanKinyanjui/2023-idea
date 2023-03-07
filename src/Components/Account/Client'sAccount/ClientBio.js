import React from 'react';
import './ClientAccount.css';
import {MdEdit} from 'react-icons/md';
import {MdArrowBackIosNew} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function ClientBio() {
  return (
    <div className='ClientBio flex items-center grid'>
        <div className='ClientBio-nav w-11/12 md:w-5/6 place-self-center mx-auto flex justify-between text-green-900 py-2 px-2 md:text-xl items-center pb-4 md:pb-2'>
        <Link to='/'><p><MdArrowBackIosNew /></p></Link>
        <Link to='/'> <Typography className = 'fitbitName'>Better You<span className='period'>.</span></Typography></Link>
        </div>
        <div className='grid mx-auto borderrounded-full '>
        <img  src='https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='ClientBio-img '/>
         {/* <p className='mx-auto w-full'><MdEdit /></p> */}
        <div className='ClientBio-content'>
        <p className='py-1' >Joan Kinyanjui</p>
        <p className='py-1'>kinyanjuijoan52@gmail.com</p>
        <p className='py-1'>0790236990</p>
        {/* <p className='mx-auto w-full'><MdEdit /></p> */}
        </div>
        </div>
    </div>
  )
}

export default ClientBio