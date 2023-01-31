import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {RxHamburgerMenu} from "react-icons/rx"
import {IoIosArrowDown} from 'react-icons/io'
import Dropdown from 'react-bootstrap/Dropdown';
import './Home.css'


function NavComponent() {
  return (
    <div>
        <Navbar fixed='top' className='Navbar'>
        <Container >
          <Navbar.Brand href="#home" className=' text-lg md:text-3xl font-black text-white flex items-center'><p className='text-green-500'>Better You</p></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home" className=' flex md:hidden'><RxHamburgerMenu className='text-green-500 text-2xl' /> </Nav.Link>
         <div className='hidden md:flex '>
            <Nav.Link href="#pricing" className='text-green-500 text-base md:text-md'>About Us</Nav.Link>
            <Nav.Link href="#features" className='text-green-500 text- base md:text-md' ><p className='flex items-center'>Services</p></Nav.Link>
            <Nav.Link href="#pricing" className='text-green-500 text-base md:text-md'>Blog</Nav.Link>
            <Nav.Link href="#pricing" className='text-green-500 text-base md:text-md'>Join Team</Nav.Link>
         </div>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavComponent