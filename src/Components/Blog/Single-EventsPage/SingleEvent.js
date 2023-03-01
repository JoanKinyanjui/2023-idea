import React from 'react';
import { Link } from 'react-router-dom';
import './SEvent.css'

function SingleEvent() {
  return (
    <div className='single-event-page grid place-content-center items-center'>
        <p>Coming Soon</p>
        <Link to='/blog'><p className='text-xl text-green-600 py-8'>Go back</p></Link>
        </div>
  )
}

export default SingleEvent