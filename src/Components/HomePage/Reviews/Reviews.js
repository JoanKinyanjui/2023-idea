import React from 'react';
import './Revies.css'

function Reviews() {
    const[num,setNum]=React.useState(0);

    React.useEffect(() => {
       num < 4000 && setTimeout(() => setNum(num + 1), 200);
     }, [num]);
     
  return (
    <div className='Reviews'>
            <div className=' py-24 w-full lg:w-3/4 mx-auto '  >
 <ul className='flex flex-row mx-8 lg:mx-0 flex-wrap'>
    <li className='mx-auto'>
    <div className='text-center'>
    <p className='font-medium lg:font-bold text-blue-500 text-2xl sm:text-5xl md:text-7xl pb-4 '>+ {num} </p>
    <p className='text-base'> Licensed Therapists</p>
   </div>
    </li>

    <li className='mx-auto'>
    <div className='text-center'>
    <p className='font-medium lg:font-bold text-blue-500 text-2xl sm:text-5xl md:text-7xl pb-4'>+ {num}</p>
    <p className='text-base' >People that got help</p>
   </div>
    </li>

    <li className='mx-auto'>
    <div className='text-center'>
    <p className='font-medium lg:font-bold text-blue-500 text-2xl sm:text-5xl md:text-7xl pb-4'>+ {num}</p>
    <p className='text-base'> Appointments Completed</p>
   </div>
    </li>
 </ul>
    </ div>
    </div>
  )
}

export default Reviews