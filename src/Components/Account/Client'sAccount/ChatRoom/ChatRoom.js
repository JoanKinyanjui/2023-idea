import React from 'react';
import './ChatRoom.css';
import {HiMicrophone} from 'react-icons/hi';
import {IoIosSend,IoIosArrowBack} from 'react-icons/io';
import {BsPlus} from 'react-icons/bs';
import {MdVideocam,MdCall} from 'react-icons/md'
import ChatThread from './ChatThread';
import { Link } from 'react-router-dom';

function ChatRoom() {
  return (
<div className='Absolute-ChatRoom'>
<div className='ChatRoom'>
        <div className='ChatRoom-Navbar flex items-center justify-between '>
           <div className='flex items-center'>
           <Link to='/loggedin'><IoIosArrowBack className='text-neutral-900 text-3xl md:text-4xl px-1' /></Link>
           <p className='px-2 text-neutral-900'>Dr. Irene Muthoni</p>
           </div>
           <div className='flex items-center'>
            <MdCall className='text-neutral-900 text-2xl md:text-3xl px-1 ' />
           <MdVideocam className='text-neutral-900 text-2xl md:text-3xl px-1' />
           </div>
        </div>
        <div>
            <ChatThread />
        </div>
        {/* Input Box */}
        <div className='ChatRoom-input-send-div flex items-center justify-between w-full md:w-11/12'>
    <div>
    <BsPlus className='text-green-600 text-3xl md:text-4xl font-black px-1'/>
    </div>
    <input type='text'  className='border w-3/4 py-0 md:py-2'/>
    <div className='flex items-center'>
        <HiMicrophone  className='text-green-600 text-2xl md:text-3xl px-1'/>
        <IoIosSend className='text-green-600  text-2xl md:text-3xl px-1' />
    </div>
        </div>
    </div>
</div>
  )
}

export default ChatRoom