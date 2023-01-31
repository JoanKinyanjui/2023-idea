import React from 'react'
import Benefits from './Benefits/Benefits';
import CarouselComponent from './CarouselComponent'
import CenterCaption from './CenterCaption';
import Footer from './Footer/Footer';
import HowWeHelp from './HowWeHelp/HowWeHelp';
import NavbarComponent from './NavComponent'
import Proffessional from './Professional/Proffessional';
import Reviews from './Reviews/Reviews';
// import Testimonials from './Testimonials/Testimonials';
import Works from './Works/Works';

function Home() {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <Works />
      <Benefits />
      <Proffessional />
      <Reviews />
      <HowWeHelp />
      <Footer />
    </div>
  )
}

export default Home;