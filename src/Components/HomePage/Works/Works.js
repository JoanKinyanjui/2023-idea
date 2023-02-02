import React from 'react';
import './Works.css';
import Grid from '@mui/material/Grid';
import {FaGift, FaHeadphones, FaWallet } from 'react-icons/fa';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import {GoChecklist} from 'react-icons/go' 
import {FaFileSignature} from 'react-icons/fa'
import {BsFillCalendarDayFill} from 'react-icons/bs'
import {GiGloves} from 'react-icons/gi'

function Works() {
  return (
    <div className='Works-div py-8'>
        <p className='text-xl sm:text-2xl italic'> ~ Here's How We Work ~</p>
            <div className='Services py-2'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{margin:"auto",paddingBottom:"10px"}}>
        <Grid item xs={6} md={3} className=''>
          <div className='services-items'>
            <div className='services-items-one '><div><GoChecklist className='services-icons'/></div></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>Choose A Service</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>on order over $150</div>
            </div>
          </div>
        </Grid>
       
        <Grid item xs={6} md={3} className='border-none'>
          <div className='services-items'>
            <div className='services-items-one '><FaFileSignature className='services-icons'/></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>Fill In A brief assessment</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>100% money back guarantee</div>
            </div>
          </div>
        </Grid>
    
        <Grid item xs={6} md={3} className='border-none'>
          <div className='services-items'>
            <div className='services-items-one'><GiGloves className='services-icons'/></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>Get Matched to A Therapist</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>offer special bonuses with gift</div>
            </div>
          </div>
        </Grid>
      
        <Grid item xs={6} md={3} className='border-none'>
          <div className='services-items'>
            <div className='services-items-one'><BsFillCalendarDayFill className='services-icons'/></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>Book an appointment</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>call us 24/7 at 123-456-789</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default Works