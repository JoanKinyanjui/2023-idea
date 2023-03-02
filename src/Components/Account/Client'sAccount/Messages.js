import React from 'react';
import { Link } from 'react-router-dom';
import './ClientAccount.css'
import MessageSearchBar from './MessageSearchBar';

function Messages() {
  return (
    <div className='Message'>
      <div>
        <MessageSearchBar />
      </div>
<Link to='/chatroom' >
<div className='flex items-center justify-between py-3 border-b py-1 '>
       <div className='flex '>
       <img src='/images/pexels-biola-visuals-15122857.jpg' className='Messages-img'/>
       <div className='grid px-3 '>
       <p className='flex justify-start'>Dr. Irene Muthoni</p>
       <p className='flex  justify-start text-gray-500 text-sm'>Hae too Joan.</p>
       </div>
       </div>
       
<div className='grid justify-items-center'>
  <div className='message-time'>17:20</div>
<div className='message-no flex items-center place-content-center text-no'>2</div>
</div>
      </div>
</Link>


{/* Two */}
<Link to='/chatroom' >
<div className='flex items-center justify-between py-3 border-b py-1 '>
       <div className='flex '>
       <img src='https://images.pexels.com/photos/1367278/pexels-photo-1367278.jpeg?auto=compress&cs=tinysrgb&w=1600' className='Messages-img'/>
       <div className='grid px-3 '>
       <p className='flex justify-start'>Dr. Jane Gakenia</p>
       <p className='flex  justify-start text-gray-500 text-sm'>I hope you have been sleeping fine.</p>
       </div>
       </div>
       
<div className='grid justify-items-center'>
  <div className='message-time'>11:00</div>
{/* <div className='message-no flex items-center place-content-center text-no'></div> */}
</div>
      </div>
</Link>

{/* Three */}
<Link to='/chatroom' >
<div className='flex items-center justify-between py-3 border-b py-1 '>
       <div className='flex '>
       <img src='https://images.pexels.com/photos/6212656/pexels-photo-6212656.jpeg?auto=compress&cs=tinysrgb&w=1600' className='Messages-img'/>
       <div className='grid px-3 '>
       <p className='flex justify-start'>Dr. Grace Kimando</p>
       <p className='flex  justify-start text-gray-500 text-sm'>Are you coping Okay.</p>
       </div>
       </div>
       
<div className='grid justify-items-center'>
  <div className='message-time'>08:40</div>
<div className='message-no flex items-center place-content-center text-no'>1</div>
</div>
      </div>
</Link>
    </div>
  )
}

export default Messages;