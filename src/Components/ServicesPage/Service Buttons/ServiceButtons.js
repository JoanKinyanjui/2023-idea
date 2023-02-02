import { Grid } from '@mui/material';
import React from 'react';
import './ServiceButtons.css';

function ServiceButtons() {
  return (
    <div className='ServicesPage'>
    <div className='ServiceButtons grid items-center'>

<Grid container spacing={2}  className='grid-container'>
<Grid item xs={12} className="button-grid" >
    <div>
    <p className='text-black  sm:text-2xl md:text-3xl font-black md:py-12'>What Type of Support Are You Looking For ?</p>
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
    </div>
  )
}

export default ServiceButtons