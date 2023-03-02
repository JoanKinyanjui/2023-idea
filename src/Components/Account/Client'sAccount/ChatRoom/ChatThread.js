import React from 'react'

function ChatThread() {
  return (
   <div className='ChatThread '>

    <div className='flex items-center justify-start'>
        <div className='own-account-chat-img'>
            <img src='https://images.pexels.com/photos/13723786/pexels-photo-13723786.jpeg?auto=compress&cs=tinysrgb&w=1600' className='own-account-chat-img-spec'/>
        </div>
        <div className='own-account-chat-message flex items-center ml-1'>
        <p>hae</p>
        </div>
    </div>

{/* Reply */}
    <div className='flex items-center justify-end'>
        <div className='therapist-account-chat-message flex items-center mr-1'>
        <p>hae too</p>
        </div>
    <div className='therapist-account-chat-img '>
            <img src='/images/pexels-biola-visuals-15122857.jpg' className='own-account-chat-img-spec'/>
    </div>    
    </div>

   </div>
  )
}

export default ChatThread