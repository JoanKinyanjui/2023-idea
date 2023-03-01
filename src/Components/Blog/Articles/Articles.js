import React from 'react'
import MoreStories from './MoreStories'
import './Articles.css'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Articles() {
  return (
    <div className='Articles '>

    <div className='Even-more-stories items-center flex place-content-center'>
        <div className='flex place-content-center justify-content-center'>
<Grid container maxWidth='xl' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='grid place-content-center pb-4'>
  <Grid item xs={10} md={6} className='grid items-center'>
    <div><img src='/images/pexels-alex-green-5699424.jpg' className='main-article-img py-2'/></div>
  </Grid>
  <Grid item xs={10} md={6} className='pb-8 md:pb-24'>
    <div className='grid items-center md:h-full'>
       <div className=' iish hidden md:block flex-nowrap place-content-center md:place-content-start py-8 text-3xl md:text-4xl lg:text-5xl'> 
       <p className=''>Why People need</p> <p className='text-green-600 px-2 py-1'> Therapy ?</p>
       </div>
       <div className=' iish flex md:hidden flex-nowrap  place-content-center md:place-content-start py-8 text-3xl md:text-5xl'> 
       <p className=''>Why People need</p> <p className='text-green-600 md;'> Therapy ?</p>
       </div>
       <div className='py-4'>
        <p className=' article-content text-normal md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis .
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis .
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis .
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ...
        </p>
       </div>
       <div className='flex justify-between text-white w-3/4 sm:w-1/2 md:w-1/2 mx-auto'>
      <Link to='/blog/singlepage' ><div><button className=' article-btn bg-green-600'>Read More</button></div></Link>
       <Link to='/' > <div><button className=' article-btn bg-black'>Join Now</button></div></Link>
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