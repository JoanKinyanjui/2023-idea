import React from 'react'
import ClientBio from './ClientBio'
import Profile from './Profile'

function ClientAccount() {
  return (
    <div>
        {/* BigScreen */}
        <div className='ClientAccount'>
            <ClientBio />
            <div><Profile /></div>
        </div>


        {/* Small Screen */}


    </div>
  )
}

export default ClientAccount