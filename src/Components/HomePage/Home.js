import React from 'react'
import Benefits from './Benefits/Benefits';
import CarouselComponent from './CarouselComponent'
import CenterCaption from './CenterCaption';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HowWeHelp from './HowWeHelp/HowWeHelp';
import NavbarComponent from './NavComponent'
import Proffessional from './Professional/Proffessional';
import Reviews from './Reviews/Reviews';
import Testimony from './Testimony/Testimony';
// import Testimonials from './Testimonials/Testimonials';
import Works from './Works/Works';

function Home() {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      {/* <CarouselComponent /> */}
      <Works />
      <Benefits />
      <HowWeHelp />
      <Reviews />
      <Proffessional />
      <Testimony />
      <Footer />
    </div>
  )
}

export default Home;