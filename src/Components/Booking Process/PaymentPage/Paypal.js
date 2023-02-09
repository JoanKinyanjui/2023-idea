import React from 'react';
import './PaymentPage.css';
import {IoLogoPaypal} from 'react-icons/io5'
import { Link } from 'react-router-dom';

function Paypal() {
  return (
    <div className=' grid place-content-center'>
        <div  className=' flex justify-center w-full py-4'>
            {/* <img src='/images/paypal.png ' className='paypal-img'/> */}
            <p><IoLogoPaypal className='text-green-600 text-4xl' /></p>
        </div>
        <form>
<div className='flex py-2'>
<label className='label-payment' > Email Adress :</label>
 <input type='text' placeholder='@gmail.com'  className='input-payment'/>
</div>
<div className='flex py-2'>
<label className='label-payment'> Amount :</label>
<input type='number' value='1000' className='input-payment' />
</div>
<Link to='/summary'>
<div className='w-full items-center py-8'>
<input type='submit' value='Confirm Payment' className='confirm-payment px-4 py-1 rounded-sm' />
</div>
</Link>
        </form>
    </div>
  )
}

export default Paypal;