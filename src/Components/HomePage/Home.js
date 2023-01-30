import React from 'react'
import Benefits from './Benefits/Benefits';
import CarouselComponent from './CarouselComponent'
import CenterCaption from './CenterCaption';
import NavbarComponent from './NavComponent'
import Proffessional from './Professional/Proffessional';
import Works from './Works/Works';

function Home() {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <Works />
      <Benefits />
      <Proffessional />
    </div>
  )
}

export default Home;