import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
    const clients = [
        {
            img: image1,
            review:
                "I would trust them with any future repairs, I would not take my car anywhere else.",
        },
        {
            img: image2,
            review: "Honest and trustworthy.Thank you rakhi.We appreciate your hard work! Highly recommend!",
        },
        {
            img: image3,
            review:
                "I felt like she was honest, there were no hidden fees.It was a great experience!",
        },
    ]

    return (
        <div className='t-wrapper' id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work</span>
                <span> from me...</span>
                <div className='blur t-blur1' style={{ background: "var(--purple)" }}></div>
                <div className='blur t-blur2' style={{ background: "skyblue" }}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {clients.map((clients, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={clients.img} alt="" />
                                <span >{clients.review}</span>
                            </div>
                        </SwiperSlide>

                    )
                })}


            </Swiper>
        </div>
    );
};

export default Testimonial;