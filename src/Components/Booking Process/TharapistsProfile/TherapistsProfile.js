import React, { useState } from 'react';
import BookingNavbar from '../BookingNavbar/BookingNavbar';
import './TherapistsProfile.css';
import {RiStarSFill} from 'react-icons/ri';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import AppointmentPicker from './AppointmentPicker';
import { Link } from 'react-router-dom';

function TherapistsProfile() {

  const [value, onChange] = useState(new Date());


  return (
<>
<BookingNavbar />
<div className='TherapistsProfile'>
  {/* Profile Info */}
<div className='therapist-profile-one grid' >
<div className='therapist-profile-page-img-div w-full grid place-content-center'>
  <img  src="/images/pexels-jonathan-borba-5456794.jpg" className='therapist-profile-page-img'/>
</div>
<div className='therapist-profile-page-content-div grid  md:w-5/6 lg:w-3/4 justify-self-center'>
<div className='therapist-profile-page-content-div-mini'>
<div className='flex justify-between py-4'>
<p>John Mackenzie</p>
<p className='flex'>
    <RiStarSFill className='text-green-600' />
    <RiStarSFill className='text-green-600' />
    <RiStarSFill className='text-green-600' />
    <RiStarSFill  className='text-green-600' />
</p>
</div>
<div className='flex justify-between py-4'>
<p>Years of Experience</p>
<p className='flex'>
5 yrs
</p>
</div>
<div className='flex justify-between py-4'>
<p>Successful Sessions</p>
<p className='flex'>
208
</p>
</div>
<div className='flex justify-between py-4'>
<p>Thumbs Up</p>
<p className='flex'>
87
</p>
</div></div>

  
</div>
</div>

{/* Calendar */}
<div className='therapist-profile-two grid items-center' >
<div className='two-booking-calendar'>
<AppointmentPicker />
<div>
  <form>
  <textarea placeholder="add a note ..."  className='w-5/6 px-2 py-2 mt-2 textearea-booking'/>
</form>
</div>
</div>
<Link to='/paymentPage' ><button className='BookingButton'>Complete Booking</button></Link>
    </div>
    </div>
</>
  )
}

export default TherapistsProfile;  