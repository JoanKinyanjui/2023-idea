import React from 'react';
import { Link } from 'react-router-dom';
import './ClientAccount.css'

function Messages() {
  return (
    <div className='Message'>
<Link to='/chatroom' >
<div className='flex items-center justify-between py-3 border-b py-1 border-t'>
       <div className='flex '>
       <img src='/images/pexels-biola-visuals-15122857.jpg' className='Messages-img'/>
       <div className='grid px-3 '>
       <p className='flex justify-start'>Sharon Njogu</p>
       <p className='flex  justify-start text-gray-500 text-sm'>Hae too Joan.</p>
       </div>
       </div>
       
<div className='grid justify-items-center'>
  <div className='message-time'>17:20</div>
<div className='message-no flex items-center place-content-center text-no'>2</div>
</div>
      </div>
</Link>
    </div>
  )
}

export default Messages;