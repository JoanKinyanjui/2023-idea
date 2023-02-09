import React from 'react';
import './PaymentPage.css';
import {BsBank2} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Bank() {
  return (
    <div className=' grid place-content-center'>
        <div  className='py-4 w-full flex justify-center'>
           <BsBank2 className='text-green-600 text-4xl'/>
        </div>
        <form>
<div className='flex py-2'>
<label className='label-payment' > Card Number :</label>
 <input type='text' placeholder='+254 xxx xxx xxx'  className='input-payment w-full'/>
</div>
<p className='text-sm text-slate-500'> (Enter the 16-digit card number on your card )</p>
<div className='flex py-2'>
<label className='label-payment'> CVV Number :</label>
<input type='number' placeholder='684' className='input-payment' />
</div>
<div className='flex py-2'>
<label className='label-payment'> Expiry Date :</label>
<div className='flex'>
<input type='number' placeholder='10/23' className='input-payment' />
</div>
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

export default Bank