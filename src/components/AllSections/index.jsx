import React from 'react';
import {Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';



import Cards from "../Cards";
import 'swiper/css';
import 'swiper/css/pagination';



const Links = [
    {
        id: 1,
        name: 'Главная',
        path: '/'
    },
    {
        id: 2,
        name: 'Статьи',
        path: '/'
    },
    {
        id: 3,
        name: 'Обо мне',
        path: '/'
    },
    {
        id: 4,
        name: 'Реклама',
        path: '/'
    },
    {
        id: 5,
        name: 'Профиль',
        path: '/'
    }
]
const AllSections = () => {
    return (
        <div className={`all-sections`}>
            <header className={`all-sections__header`}>
                <ul className={`all-sections__header--links flex items-center justify-between`}>
                    {Links.map((link) => (
                        <li className={`all-sections__header--links__link`} key={link.id}><a href={link.path}>{link.name}</a></li>
                    ))}
                    <div className={`all-sections__header--links__search`}>
                        <input type="search" placeholder={`Поиск по блогу`} />
                    </div>
                </ul>
                <div className={`swiperBody`}>
                    <Swiper
                        slidesPerView={4}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Cards/></SwiperSlide>
                        <SwiperSlide><Cards/></SwiperSlide>
                        <SwiperSlide><Cards/></SwiperSlide>
                        <SwiperSlide><Cards/></SwiperSlide>
                        <SwiperSlide><Cards/></SwiperSlide>
                        <SwiperSlide><Cards/></SwiperSlide>
                    </Swiper>
                </div>
            </header>
        </div>
    );
};

export default AllSections;