import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y ,Zoom,Autoplay} from 'swiper';
import OneArticle from './OneArticle';
import './Articles.css'
import { singleArticles } from './SingleArticles';

SwiperCore.use([Autoplay,Pagination,Navigation]);


function MoreStories() {
  return (
    <div className='More-div py-6'>
            <Swiper
     style={{
        "--swiper-navigation-color": " rgb(72, 211, 65)",
        "--swiper-pagination-color": " rgb(72, 211, 65)"
      }}
      breakpoints={{
        0:{
            slidesPerView:2,
            // width: "30%",
        },
        640:{
            slidesPerView:3,
            // width: "20%",
        },
        920:{
            slidesPerView:4,
            // width: "15%",
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y,Zoom]}
      spaceBetween={50}
      slidesPerView={4}
      zoom={true}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    //   autoplay={{
    //     delay: 7000,
    //     disableOnInteraction: false,
    //   }}
    >
  
      
      {singleArticles.map((article,index)=>(
  <SwiperSlide key={article.id}><OneArticle article={article} /></SwiperSlide>
      ))}
      .
    </Swiper>
    </div>
  )
}

export default MoreStories