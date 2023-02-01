import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css'
import {FaPaypal} from 'react-icons/fa'
import {SiWebmoney} from 'react-icons/si'
import {AiFillBank} from 'react-icons/ai'
import {SiStarlingbank} from 'react-icons/si'

function Footer() {
  return (
    <div className='Footer py-8 '>
<Grid container spacing={2} className="Footer-container grid py-8 ">

<Grid item xs={12} sm={6} md={3}>
  <div className='grid column-1' >
<div className='flex items-center'>  
<img src='/images/Screenshot_from_2023-01-31_09-33-05-removebg-preview.png' className='footer-logo'/>
<div className='py-4'>
        <p className=''>BETTER YOU</p>
        <div className='green-line'></div>
    </div>
</div>

<div className='secrets'>
    <p>Secrets Resorts & Spa Offer adults an escape to Romance and sensuality in a spectacular oceanfront settings</p>
    </div>
 <div className=''>
    <ul className='flex footer-socials'>
        <li className='mx-1'>facebook</li>
        <li className='mx-1'>Twitter</li>
        <li className='mx-1'>Instagram</li>
        <li className='mx-1'>Tiktok</li>
    </ul>
 </div>
  </div>
</Grid>


<Grid item xs={12} sm={6} md={3}>
  <div className='column-2'>
  <div className='py-4'>
        <p>ABOUT BETTER HELP</p>
        <div className='green-line'></div>
    </div>
    <div>
        <p>Better Help Offices are Located in Kilimani, Palacina House Floor 5</p>
        <p>General info Contact : +254790236990</p>
        <p>ite to us at betterhelp@gmail.com</p>
    </div>
    </div>
</Grid>


<Grid item xs={12} sm={6} md={3}>
  <div className='column-3'>
  <div className='py-4'>
        <p>EXPLORE</p>
        <div className='green-line'></div>
    </div>
    <div>
        <p>Events</p>
        <p>Login/Register</p>
        <p>Contact Us</p>
        <p>Gallery</p>
        <p>Join Us</p>
        <p>Bronchure</p>
    </div>
    </div>
</Grid>


<Grid item xs={12} sm={6} md={3}>
  <div className='column-4'>
  <div className='py-4'>
        <p>USEFULL LINKS</p>
        <div className='green-line'></div>
</div>
<div>
    <p>Find a Therapist</p>
    <p>Anxiety Test</p>
    <p>Depression Test</p>
    <p>Insurance</p>
    <p>Better Help Reviews</p>
    <p>Join Our Community</p>
</div>
    </div>
</Grid>


</Grid>
<hr />
    <div className='end-info-line grid md:flex justify-center pt-4'>
<p className='allRights text-sm'>BETTER HELP MADE WITH LOVE @ 2016 All Rights Reserved</p>
<div className='payment-means-footer'>
    <ul className='flex md:mx-4  justify-center'>
        <li className='mx-2 text-2xl'><FaPaypal /></li>
        <li className='mx-2 text-2xl '><SiWebmoney /></li>
        <li className='mx-2 text-2xl'><AiFillBank /></li>
        <li className='mx-2 text-2xl'><SiStarlingbank /></li>
    </ul>
</div>
    </div>
    </div>
  )
}

export default Footer