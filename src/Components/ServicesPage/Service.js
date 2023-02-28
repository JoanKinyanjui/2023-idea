import React, { useEffect } from 'react';
import NavbarComponent from '../HomePage/NavComponent';
import 'animate.css';
import ServiceButtons from './Service Buttons/ServiceButtons';
import { redirect} from 'react-router-dom';

function Service() {
const token = localStorage.getItem('token');
// console.log(token)
if(!token){
  return redirect("/login");
}{
  return (
    <div>
            <NavbarComponent />
            <ServiceButtons />
    </div>
  )
}
}

export default Service;