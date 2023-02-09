import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentPage.css'

function Mpesa() {
  return (
    <div className=' grid place-content-center'>
        <div  className='py-4 justify-center w-full'>
            <img src='/images/mpesa.png ' className='mpesa-img mx-auto'/>
        </div>
        <form>
<div className='flex py-2'>
<label className='label-payment' > Phone Number :</label>
 <input type='text' placeholder='+254 xxx xxx xxx'  className='input-payment'/>
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

export default Mpesa