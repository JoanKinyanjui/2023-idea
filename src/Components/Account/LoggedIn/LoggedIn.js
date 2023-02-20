import React from 'react';
import './Loggedin.css';
import {MdEdit} from 'react-icons/md';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {IoMdSettings} from 'react-icons/io';
import Badge from '@mui/material/Badge';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BookingNavbar from '../../Booking Process/BookingNavbar/BookingNavbar';


function LoggedIn() {
  return (
    <div className='LoggedIn'>
      <div className='hidden md:flex justify-content-center'>
{/* Big Screen */}
<BookingNavbar />
<div className='big-screen '>
<div className='big-screen-div'>
<div className='big-screen-one'>
<div className='big-client-img flex items-center'>
  <img src='/images/pexels-dellon-thomas-1188079.jpg' className='big-client-img-jpg' />
  <div className='big-client-img-edit-icon'><MdEdit  className='text-lg text-green-600'/></div>
</div>
</div>
<div className='big-screen-two'>
<div className='client-info-big-screen py-4'>
  <p className='py-1' >Arianna Wanjiru</p>
  <p className='py-1' >ariana56@gmail.com</p>
  <p className='py-1' >+254 790 23 6990</p>
  <div className='big-client-info-edit-icon'>
    <MdEdit  className='text-lg text-green-600'/>
  </div>
</div>
<div className='big-screen-three'>
<div className=' tab-icons-big-screen  justify-between py-6'>

<Tabs
defaultActiveKey="profile"
id="fill-tab-example"
className="mb-3 bg-transparent"
fill
>
<Tab eventKey="home"  title={<BsFillSuitHeartFill className='text-green-600 text-xl mx-auto' /> }>
  <div className='bg-blue-green w-full h-screen'>
    Favourites
  </div>
</Tab>
<Tab eventKey="profile" title={  <Badge badgeContent={2} color="primary"><BsFillChatDotsFill  className='text-green-600 text-xl  mx-auto' /> </Badge>}>
<div className='bg-blue-green w-full h-screen'>
Chats with subscribed therapists
</div>
</Tab>
<Tab eventKey="longer-tab" title={<IoMdSettings  className='text-green-600 text-xl  mx-auto' /> }>
<div className='bg-blue-green w-full h-screen'>
 account settings
 </div>
</Tab>

</Tabs>
</div>
</div>
</div>
</div>

</div>
</div>



{/* Small Screen */}
<div className='md:hidden flex justify-content-center'>
  <BookingNavbar/>
  <div className='small-screen'>
<div className='small-client-img'>
  <img src='/images/pexels-dellon-thomas-1188079.jpg' className='small-client-img-jpg' />
  <div className='small-client-img-edit-icon'><MdEdit  className='text-lg text-green-600'/></div>
</div>
<div className='client-info-small-screen py-4'>
  <p className='py-1' >Arianna Wanjiru</p>
  <p className='py-1' >ariana56@gmail.com</p>
  <p className='py-1' >+254 790 23 6990</p>
  <div className='small-client-info-edit-icon'>
    <MdEdit  className='text-lg text-green-600'/>
  </div>
</div>
<div className=' tab-icons-small-screen  w-full justify-between py-6'>

      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title={<BsFillSuitHeartFill className='text-green-600 text-xl mx-auto' />}>
        favourite therapist
      </Tab>
      <Tab eventKey="profile" title={  <Badge badgeContent={2} color="primary"><BsFillChatDotsFill  className='text-green-600 text-xl mx-auto' /> </Badge>}>
      Chats with subscribed therapists
      </Tab>
      <Tab eventKey="longer-tab" title={<IoMdSettings  className='text-green-600 text-xl mx-auto' />}>
       account settings
      </Tab>

    </Tabs>
</div>
</div>
</div>

    </div>
  )
}

export default LoggedIn