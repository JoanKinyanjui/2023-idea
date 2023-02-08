import React from 'react';
import BookingNavbar from '../BookingNavbar/BookingNavbar';
import './ProposedTherapists.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SingleTherapist from './SingleTherapist';
import { Diversity1Outlined } from '@mui/icons-material';
import { therapists } from './Therapists';
import { Link } from 'react-router-dom';

function ProposedTherapist() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div className='Proposed '>
      <BookingNavbar />
  <div className='Howmanymatched'>    <p className='w-5/6 text-xl font-semibold mx-auto py-4'>You matched with 4 therapists, Choose the one you prefer ...  </p></div>
      <div className='Proposed-therapists '>
      
    <Box sx={{ flexGrow: 1 }} className='Proposed-therapist-container flex'>

        <Grid container spacing={2} className='py-4' >
        {therapists.map((person,index)=>(
        <Grid item xs={12} sm={6} md={4} lg={3} key={person.id}>
            {/* <Link to={person.path}> */}
          <div> <SingleTherapist person={person}/></div>
          {/* </Link> */}
        </Grid>
        ))}
      </Grid>

    </Box>
    
      </div>
      </div>
  )
}

export default ProposedTherapist;