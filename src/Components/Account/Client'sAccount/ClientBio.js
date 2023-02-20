import React from 'react';
import './ClientAccount.css';
import {MdEdit} from 'react-icons/md';
import {MdArrowBackIosNew} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function ClientBio() {
  return (
    <div className='ClientBio flex items-center'>
        <div className='ClientBio-nav flex justify-between w-full text-green-900 py-2 px-2 md:text-xl items-center'>
        <Link to='/'><p><MdArrowBackIosNew /></p></Link>
        <Link to=''> <Typography className = 'fitbitName'>Better You<span className='period'>.</span></Typography></Link>
        </div>
        <div className='grid mx-auto'>
        <img  src='/images/pexels-polina-tankilevitch-5234578.jpg' className='ClientBio-img '/>
         <p className='mx-auto w-full'><MdEdit /></p>
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