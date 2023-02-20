import React, { useEffect } from 'react';
import NavbarComponent from '../HomePage/NavComponent';
import 'animate.css';
import ServiceButtons from './Service Buttons/ServiceButtons';

function Service() {
  // useEffect(() =>{
  //   const token = window.localStorage.getItem("access_token");
  //   fetch('http://localhost:3000/services', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer' + token
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => { console.log(data) })
  //   .catch(err => { console.log(err) })
  // },[])
  return (
    <div>
            <NavbarComponent />
            <ServiceButtons />
    </div>
  )
}

export default Service;