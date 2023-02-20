import React from 'react';
import {BiLock} from 'react-icons/bi';
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {MdOutlineEmail} from 'react-icons/md'
import {MdCall} from 'react-icons/md'
import { Switch } from '@material-ui/core';

function Settings() {
  return (
    <div>
<div>
  <div className='flex items-center justify-start border-b border-gray-200 py-3'>
    <p className='px-3' ><BiLock /></p> Permissions
  </div>
  <div className='flex justify-between w-full border-b border-gray-200 py-3'>
  <div className='flex items-center justify-start '>
    <p className='px-3'><MdOutlineNotificationsActive /></p>Notification
    </div>
    <div>
      <Switch size='small' defaultChecked color='default' />
    </div>
    </div>
  
  <div className='flex items-center justify-start border-b border-gray-200 py-3'>
    <p className='px-3'><RiAccountPinCircleLine /></p>Manage Account
  </div>
  <div className='flex items-center justify-start border-b border-gray-200 py-3'>
    <p className='px-3'><MdOutlineEmail /></p>Email</div>
    <div className='flex items-center justify-start border-b border-gray-200 py-3'>
    <p className='px-3'><MdCall /></p>Phone Number
  </div>
  
</div>
    </div>
  )
}

export default Settings