import React from "react";
import './Portfolio.css';
import background from "../../img/background.jpg";
import weather from "../../img/weather.webp";
import coding from "../../img/coding.webp";
import login from "../../img/login.jpg";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
 

const Portfolio = () => {
   return (
      <div className="portfolio" id="Portfolio">
         {/* heading */}
         <span>Recent Projects</span>
         <span>Portfolio</span>

         {/* slider */}
         <Swiper 
         spaceBetween={30}
         slidesPerView={3}
         grabCursor={true}
         className='portfolio-slider'
         >
            <SwiperSlide>
               <img src={background} alt="" />
               <span>static-website</span>
            </SwiperSlide>
            <SwiperSlide>
               <img src={weather} alt="" />
               <span>Weather-forecast</span>
            </SwiperSlide>
            <SwiperSlide>
               <img src={coding} alt="" />
               <span>Responsive-landing pages</span>
            </SwiperSlide>
            <SwiperSlide>
               <img src={login} alt="" />
               <span>GymHeight-project</span>
            </SwiperSlide>

         </Swiper>
      </div>
   )
}

export default Portfolio;