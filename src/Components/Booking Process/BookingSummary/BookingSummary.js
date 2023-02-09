import React from 'react';
import './BookingSummary.css';
import Switch from '@mui/material/Switch';
import BookingNavbar from "../BookingNavbar/BookingNavbar"


function BookingSummary() {
  return (
    <div className=''>
      <BookingNavbar />
    <div className='Summary '>

    <p className='text-xl md:text-2xl font-semibold py-8'>Appointment Summary</p>

    <div className='Summary-content grid items-center h-full'>
      <p className='w-full flex place-content-center'>Congratulations your appointment has been booked Successfully !!!</p>
      <p>Hello Nathan Kuria ,</p>
      <p>Your appointment is scheduled as follows :</p>
      <div className='ml-8'>
       <div className='flex'> <p className='first-part' >Date :</p><p className='px-4' > 26th February 2023.</p></div>
       <div className='flex'> <p className='first-part'>Time :</p><p className='px-4'> 11:00 AM.</p></div>
       <div className='flex'> <p className='first-part'>Duration :</p><p className='px-4'> 1 hr.</p></div>
      </div>

      <div className='flex py-8  w-full justify-center items-center '>
      <p className='mx-4'>Enable  Reminder </p>
    <Switch color="success" />
    </div>
    </div>

   
    </div>
    </div>
  )
}

export default BookingSummary;
