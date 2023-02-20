import React from 'react';
import './ClientAccount.css';
import {MdEdit} from 'react-icons/md';
import {MdArrowBackIosNew} from 'react-icons/md'

function ClientBio() {
  return (
    <div className='ClientBio flex items-center'>
        <div className='ClientBio-nav flex justify-between w-full text-green-900 py-2 px-2 md:text-xl'>
        <p><MdArrowBackIosNew /></p>
            <p><MdEdit /></p>
        </div>
        <div className='grid mx-auto'>
        <img  src='/images/pexels-polina-tankilevitch-5234578.jpg' className='ClientBio-img '/>
        <div className='ClientBio-content'>
        <p className='py-1' >Joan Kinyanjui</p>
        <p className='py-1'>kinyanjuijoan52@gmail.com</p>
        <p className='py-1'>0790236990</p>
        </div>
        </div>
    </div>
  )
}

export default ClientBio