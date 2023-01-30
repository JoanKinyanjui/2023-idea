import React from 'react'
import { Container } from 'react-bootstrap';
import './Benefits.css';
import {VscActivateBreakpoints} from 'react-icons/vsc'

function Benefits() {
  return (
    <div className='Benefits grid mt-4'>
<div className='Benefits-container'>
<div>
    <p className='italic text-sm pt-2'>Spa Benefits</p>
    <p className='font-semibold text-xl md:text-2xl py-2'>GOOD FOR YOUR HEALTH</p>
    <p className='text-sm md:text-base text-slate-700'> Spread over two floors, our beautiful spa offer a soothing environment in which you can rest, relax and feel competely rejuvenated.</p>
</div>

<div className='grid md:flex items-center py-4'>
<div className='benefits-img-div'>
    <img className='benefits-img' src="https://html.themexriver.com/victoria-spa/images/home-1/adventure-img.png"/>
</div>
<div className='actual-benefits'>
    <ul className='benefits-ul'>
        <li className=' py-1' ><p className='flex items-center text-sm uppercase '><VscActivateBreakpoints className='benefits-icon mx-1' />Anonimous</p><p className='italic text-sm text-slate-700' >You don't have to use your real identity neither show your face.</p></li>
        <li className=' py-1'><p className='flex items-center text-sm uppercase '><VscActivateBreakpoints  className='benefits-icon mx-1'  />Affordable</p> <p  className='italic text-sm text-slate-700'>Safe Haven allows you choose a therapist who offers a price that's convenient for you</p></li>
        <li className=' py-1'><p className='flex items-center text-sm uppercase '><VscActivateBreakpoints  className='benefits-icon mx-1' />Convenient</p><p  className='italic text-sm text-slate-700'>You can have a therapy session from whatever time with whatever means you prefer audio/chat</p></li>
        <li className=' py-1'><p className='flex items-center text-sm uppercase '><VscActivateBreakpoints  className='benefits-icon mx-1' />Licensed</p><p  className='italic text-sm text-slate-700'>Our thousands of therapists are licensed and experienced mental health counselors with expertise in a range of issues — including anxiety, depression, substance abuse, trauma, couples therapy, and more.</p></li>
        <li className=' py-1'><p className='flex items-center text-sm uppercase '><VscActivateBreakpoints  className='benefits-icon mx-1' />Secure</p><p  className='italic text-sm text-slate-700'>We securely store and encrypt all client communications with therapist and our therapists adhere to strict professional and ethical client confidentiality codes.</p></li>
    </ul>

</div>
</div>
</div>
    </div>
  )
}

export default Benefits