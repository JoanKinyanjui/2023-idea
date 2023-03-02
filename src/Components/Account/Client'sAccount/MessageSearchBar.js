import React from 'react';
import {ImSearch} from 'react-icons/im';
import './ChatRoom/ChatRoom.css'

function MessageSearchBar() {
  return (
    <div className='w-full pb-3 grid place-content-center '>
        <div className='flex justify-between items-center place-content-center border px-1 rounded-full '>
        <input  type='text' className='w-full bg-white'/>
        <p>
            <ImSearch  className='md:text-xl text-green-600 mx-2' />
        </p>
        </div>
    </div>
  )
}

export default MessageSearchBar;