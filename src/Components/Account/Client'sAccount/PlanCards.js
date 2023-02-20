import React from 'react'

function PlanCards({amount,members}) {
  return (
    <div className='PlanCards h-1/2 items-center grid'>
        <div className=' text-xl md:text-3xl text-green-700'>${amount} </div>
        <div> Upto {members} members</div>
        <div> Unlimited Texts</div>
        <div><button className='Upgrade-plan-btn'>Upgrade</button></div>
        </div>
  )
}

export default PlanCards