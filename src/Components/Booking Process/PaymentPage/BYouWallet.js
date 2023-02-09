import React from 'react';
import './PaymentPage.css';
import {GiWallet} from 'react-icons/gi'
import { Link } from 'react-router-dom';

function BYouWallet() {
  return (
    <div className=' grid place-content-center'>
        <div  className=' justify-center w-full flex py-4'>
            <p><GiWallet className='text-green-600 text-4xl' /></p>
        </div>
        <form>
<div className='flex py-2'>
<label className='label-payment' > Password :</label>
 <input type='text' placeholder='*********'  className='input-payment'/>
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

export default BYouWallet;