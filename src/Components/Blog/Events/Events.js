import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css'
import EventsCard from './EventsCard';

function Events() {
  return (
    <div className='Events place-content-center py-12' >
<div className='text-2xl md:text-xl lg:text-5xl py-4 text-white font-medium tracking-wide'>Upcoming Events</div>
<div className='Cards-div flex items-center place-content-center'>
<EventsCard />
<EventsCard />
<EventsCard />
</div>

<Link to='/events'>
<div className='Readmore-events mx-auto flex items-center place-content-center mt-4'>
  Read More
</div></Link>
    </div>
  )
}

export default Events