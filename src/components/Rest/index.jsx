import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import DataCard from "../../DB/dataCard.json";
import Cards from "./Cards";

const Rest = () => {
    return (
        <div className={`swiperBody`}>
            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {DataCard.map(item => (
                    <SwiperSlide key={item.id}>
                        <Cards image={item.image} title={item.title} date={item.date}/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Rest;