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
          <Navbar.Brand href="#home" className=' text-2xl md:text-4xl font-black text-white flex items-center'><p className='text-white' style={{backgroundColor:"transparent",textShadow:'3px 3px 3px black'}}>Better You</p></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home" className=' flex md:hidden'><RxHamburgerMenu className='text-green-300 text-2xl' /> </Nav.Link>
         <div className='hidden md:flex '>
            <Nav.Link href="#pricing" className=' text-base md:text-md'><p className='text-white'>About Us</p></Nav.Link>
            <Nav.Link href="#features" className=' text- base md:text-md' ><p className='flex items-center text-white'>Services</p></Nav.Link>
            <Nav.Link href="#pricing" className=' text-base md:text-md'><p className='text-white'>Blog</p></Nav.Link>
            <Nav.Link href="#pricing" className=' text-base md:text-md'><p className='text-white'>Join Team</p></Nav.Link>
         </div>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavComponent