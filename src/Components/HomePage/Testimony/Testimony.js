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
import { help } from '../HowWeHelp/Help';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y ,Zoom,Autoplay} from 'swiper';
import OneTestimony from './OneTestimony';

SwiperCore.use([Autoplay,Pagination,Navigation]);


function Testimony() {
  return (
    <div className='Testimony grid items-center'>
            <div className='Testimonials'>
        <div className='py-0'>
            <p className='text-black text-2xl pb-2'>HERE FROM  TESTIMONIALS</p>
            <p className='text-slate-700 text-base py-2'>We always listen to our clients</p>
        </div>
    <Swiper
     style={{
        "--swiper-navigation-color": " #ffff",
        "--swiper-pagination-color": " #ffff"
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
        delay: 6000,
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