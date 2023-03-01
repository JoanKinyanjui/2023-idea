import React from 'react';
import { Link } from 'react-router-dom';
import BlogNav from '../BlogNav';
import './SinglePage.css'

function SinglePage() {
  return (
    <div className='SinglePage'>
        <BlogNav />
<div className='single-page-img-div flex place-content-center'>
    <img src='https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=1600' className='single-page-img'/>
</div>
<div className='w-11/12 md:w-5/6 mx-auto'>
    <p className='text-2xl sm:text-4xl font-medium single-page-title py-4 md:py-6'>What I Wish I Had Known on My 20-Year Mental Health Journey</p>
</div>
<div className='author-date flex items-center place-content-center w-full justify-between py-2'>
   <div className='w-3/4 md:w-1/2 flex justify-between mx-auto  items-center '>
     <p className='italic text-zinc-500'>19th March, 2023</p>
    <p className='text-medium text-zinc-800 '>By : Dr Lenny. Karanja</p></div>
</div>
<div className='single-page-content flex '>
    <p className='single-page-content-p tracking-normal sm:tracking-wide'>
    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
    </p>
</div>


<div className='w-11/12 md:w-3/4 flex justify-between mx-auto py-8 text-green-600'>
   <Link to='/blog'> <div>Back</div></Link>
   <Link to='/events'> <div>Events Page</div></Link>
</div>
    </div>
  )
}

export default SinglePage