import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimony.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "../HowWeHelp/HowWeHelp.css"
import SwiperComponent from '../HowWeHelp/SwiperComponent';
import { help } from './Test';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y ,Zoom,Autoplay} from 'swiper';
import OneTestimony from './OneTestimony';

SwiperCore.use([Autoplay,Pagination,Navigation]);


function Testimony() {
  return (
    <div className='Testimony grid items-center'>
            <div className='Testimonials-t1  py-2 md:py-4'>
        <div className='py-0'>
            <p className='text-black text-xl sm:text-2xl md:text-3xl pb-2'>HERE FROM  TESTIMONIALS</p>
            <p className='text-slate-600 text-lg py-2'>We always listen to our clients</p>
        </div>
    <Swiper
     style={{
        "--swiper-navigation-color": " rgb(72, 211, 65)",
        "--swiper-pagination-color": " rgb(72, 211, 65)"
      }}
      breakpoints={{
        0:{slidesPerView:1},
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y,Zoom]}
      spaceBetween={50}
      slidesPerView={2}
      zoom={true}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
    >
      {help.map((help,index)=>(
        <SwiperSlide key={help.id}><OneTestimony help={help} /></SwiperSlide>
      ))}
      {/* <SwiperSlide><SwiperComponent /></SwiperSlide> */}
      .
    </Swiper>
    </div>
        </div>
  )
}

export default Testimony