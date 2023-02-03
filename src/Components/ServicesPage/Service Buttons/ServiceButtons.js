import { Grid } from '@mui/material';
import React from 'react';
import './ServiceButtons.css';
import {BiMessageRoundedDots} from 'react-icons/bi'
import {TbPhoneCall} from 'react-icons/tb'
import {IoIosArrowForward} from 'react-icons/io'
import Footer from '../../HomePage/Footer/Footer';
import {GiMeditation} from 'react-icons/gi'

function ServiceButtons() {
  return (
    <div className='ServicesPage'>
    <div className='ServiceButtons grid items-center'>

<Grid container spacing={2}  className='grid-container'>
<Grid item xs={12} className="button-grid" >
    <div className='grid'>
    <p className='text-bold text-lg sm:text-2xl pb-2 md:text-3xl pt-4 sm:py-1 font-black md:py-12'>What Type of Support Are You Looking For ?</p>
    <p className='w-full md:w-3/4 place-self-center'>We Offer Comprehensive online mental health treatment options to meet all your needs</p>
    <div className='flex place-self-center  md:w-3/5 w-full place-content-center py-4 justify-evenly'>
        <p className='flex items-center'><p className='text-2xl md:text-4xl text-green-700 mx-2'><BiMessageRoundedDots /></p>Messaging</p>
        <p className='flex items-center'><p><TbPhoneCall  className='text-2xl md:text-3xl text-green-700 mx-2'/></p>Audio Call</p>
    </div>
    </div>
  </Grid>

  <Grid item xs={12} sm={6} md={4}  className="button-grid" >
    <div>
        <button className='actual-service-button individual'>
            <p>Individual</p>
            <p>( For myself )</p>
        </button>
    </div>
  </Grid>

  <Grid item xs={12} sm={6}md={4} className="button-grid">
    <div>
    <button className='actual-service-button couple'>
            <p>Cuople</p>
            <p> (For me and my partner )</p>
    </button>
    </div>
  </Grid>

  <Grid item xs={12} sm={6}md={4} className="button-grid">
    <div>
    <button className='actual-service-button teen'>
             <p>Teen</p>
            <p>( For ages 13-17 )</p>
    </button>
    </div>
  </Grid>

  <Grid item xs={12} sm={6}md={4} className="button-grid">
    <div>
    <button className='actual-service-button friend-group'>
           <p>Friend Group</p>
            <p>( For me and my friends )</p>
    </button>
    </div>
  </Grid>

  <Grid item xs={12} sm={6} md={4} className="button-grid">
    <div>
    <button className='actual-service-button psychiatry'>
           <p>Pschiatry</p>
            <p>( For medication mgt )</p>
    </button>
    </div>
  </Grid>



</Grid>
    </div>

 <div className='Services-footer-container'>
    <div className='absolute top-0 quote flex items-center w-full justify-center '>
        <p className='font-bold text-xl sm:text-2xl md:text-3xl flex items-center'><span className=' text-xl sm:text-2xl md:text-4xl mx-1'>"</span><p className='mx-2'> <GiMeditation /></p>Heal Your Mind And You Will Heal Your Life ... <p className='mx-2'> <GiMeditation /></p> <span className='text-xl sm:text-2xl md:text-4xl  mx-1'>"</span></p>
    </div>
 {/* <div className='another-services-footer'>hae</div> */}
 <div className='Services-footer flex items-end '> 
{/* <div className='grid place-content-start w-3/4 md:w-1/2'>
<p className='place-self-start text-3xl text-green-900 font-bold'>Better You</p>
 <p className='place-self-start  text-left'>We partner with employers, health plans, and schools to make mental healthcare more available and affordable.</p>
 <p className='place-self-start flex text-xl text-green-900 text-semibold items-center'>Learn More <p className='text-xl mx-2'><IoIosArrowForward /></p></p>
</div> */}
 </div>
 <div className='another-services-footer flex items-end'>
 <div className='grid place-content-start w-11/12 pl-2  pb-2 sm:w-3/4 md:w-1/2 lg:w-2/4'>
<p className='place-self-start text-xl sm:text-2xl md:text-3xl text-green-600 font-bold py-2'>Better You <span className='font-bold text-4xl text-stone-400'>.</span></p>
 <p className='place-self-start text-base sm:text-xl text-left text-stone-400'>We partner with employers, health plans, and schools to make mental healthcare more available and affordable.</p>
 <p className='place-self-start flex text-lg text-green-600 text-semibold items-center'>Learn More <p className='text-lg mx-2'><IoIosArrowForward /></p></p>
</div>
 </div>
 </div>
 <Footer />
    </div>
  )
}

export default ServiceButtons