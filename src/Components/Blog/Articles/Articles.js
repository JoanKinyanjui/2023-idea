import React from 'react'
import MoreStories from './MoreStories'
import './Articles.css'
import { Grid } from '@material-ui/core'

function Articles() {
  return (
    <div className='Articles '>

    <div className='Even-more-stories items-center flex place-content-center'>
        <div className='flex place-content-center justify-content-center'>
<Grid container maxWidth='xl' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='grid place-content-center py-4'>
  <Grid item xs={10} md={6} className='grid items-center'>
    <div><img src='/images/pexels-alex-green-5699424.jpg' className='main-article-img py-8 md:py12'/></div>
  </Grid>
  <Grid item xs={10} md={6}>
    <div className='grid items-center md:h-full'>
       <div className=' iish flex flex-nowrap md:block place-content-center md:place-content-start py-8 text-3xl md:text-5xl'> 
       <p>Why People need</p> <p className='text-green-600 md; px-2'> Therapy ?</p>
       </div>
       <div className='py-4'>
        <p className=' article-content text-normal md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis .
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis .
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis .
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ...
        </p>
       </div>
       <div className='flex justify-between text-white w-3/4 sm:w-1/2 md:w-1/2 mx-auto'>
        <div><button className=' article-btn bg-green-600'>Read More</button></div>
        <div><button className=' article-btn bg-black'>Join Now</button></div>
       </div>
    </div>
  </Grid>
 
</Grid>
        </div>

    </div>
    <div>
     <MoreStories />
   </div>
    </div>
  )
}

export default Articles