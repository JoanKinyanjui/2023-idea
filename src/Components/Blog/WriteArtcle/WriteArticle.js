import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './WriteArticle.css'

function WriteArticle() {
    const [message,setMessage]= useState('')
    const onSubmitArticle =(e)=>{
    e.preventDefault()
    setMessage(`You have Successfully Submitted Your Article  😀 .Our team is currently reviewing it and will publish within 12hrs`)
}

  return (
    <div  >
<div className='BlogNav flex items-center  h-full'>
<div className='flex items-center justify-between w-screen md:w-5/6 mx-auto'>
<Link to='/'> <p className = 'fitbitName'>Better You<span className='period'>.</span></p></Link>
<Link to='/blog' ><p className='Back-write font-normal text-green-600'>Back</p></Link>
</div>
</div>

<div className='woddap'>
<div className='write-article-top-div'>
    <form onSubmit={onSubmitArticle}>
        <div className='grid items-center py-4'>
        <label className='article-label' >Author's Name </label>
        <input type='text' className='border w-11/12 sm:w-full ' />
        </div>
        <div className='grid items-center py-4'>
        <label className='article-label'>Date </label>
        <input type='date' className='w-11/12 sm:w-full border' />
        </div>
        <div className='grid  py-4'>
        <label className='article-label'>Title </label>
        <input type='text' className='border w-11/12 sm:w-full'  />
        </div>
        <div className='grid py-4'>
        <label className='article-label'>Content </label>
        <textarea type='text'className='border write-article-content w-11/12 sm:w-full'  placeholder='...' ></textarea>
        </div>
        <div className='py-8'>
            <input type='submit' value='Publish' className='publish-article ' />
        </div>
    </form>
  
</div>
{message ?(
  <div className='Popup-article w-screen h-screen grid place-content-center items-center '>
 <div className='Popup-article-div mx-auto grid items-center place-content-center'>
 <p className='w-11/12 mx-auto'>{message}</p>
 <p className='pt-4 text-blak'><button onClick={()=>{setMessage('')}}>EXIT</button></p>
 </div>

</div>
    ):
    <p></p>}
<div className='w-screen'>
    <img src='/images/betteryoulogo.png' className='better-you-logo-write-page mx-auto'/>
</div>
</div>

    </div>
  )
}

export default WriteArticle;