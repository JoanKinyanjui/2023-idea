import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PersonalMentions.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "../../HomePage/HowWeHelp/HowWeHelp.css"
// import SwiperComponent from '';
import { help } from './Mentions';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y ,Zoom,Autoplay} from 'swiper';
import OneTestimony from '../../HomePage/Testimony/OneTestimony';

SwiperCore.use([Autoplay,Pagination,Navigation]);

function PersonalMentions() {
  return (
    <div className='Testimony-1 grid items-center'>
            <div className='Testimonials-t1  py-2 md:py-4'>
        <div className='py-0'>
            <p className='text-black text-xl sm:text-2xl md:text-3xl pb-2'>HEAR FROM THEIR MENTIONS</p>
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
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {help.map((help,index)=>(
        <SwiperSlide key={help.id}><OneTestimony help={help} /></SwiperSlide>
      ))}

      .
    </Swiper>
    </div>
        </div>
  )
}

export default PersonalMentions;