import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y ,Zoom,Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "./HowWeHelp.css"
import SwiperComponent from './SwiperComponent';
import { help } from './Help';
SwiperCore.use([Autoplay,Pagination,Navigation]);


function HowWeHelp() {
  return (
    <div className='Testimonials py-8'>
        <div className='py-8'>
            <p className='text-semibold text-3xl py-2'>How We Help You</p>
            <p className='text-slate-700'>The Goal is to create a safe anonymous environment for you to be yourself at an afford able price</p>
        </div>
    <Swiper
     style={{
        "--swiper-navigation-color": " rgb(72, 211, 65)",
        "--swiper-pagination-color": " rgb(72, 211, 65)"
      }}
      breakpoints={{
        768:{slidesPerView:3},
        520:{slidesPerView:2},
        0:{slidesPerView:1},
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y,Zoom]}
      spaceBetween={50}
      slidesPerView={4}
      zoom={true}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {help.map((help,index)=>(
        <SwiperSlide key={help.id}><SwiperComponent help={help} /></SwiperSlide>
      ))}
      {/* <SwiperSlide><SwiperComponent /></SwiperSlide> */}
      .
    </Swiper>
    </div>
  )
}

export default HowWeHelp;