import React from 'react';


import 'swiper/css';
import 'swiper/css/pagination';

import Rest from "../Rest";
import Header from "../Header";
import {GetSearch, PhotoIcon} from "../../images/svg";





const AllSections = () => {
    return (
        <div className='overflow-hidden'>
            <Header/>
            <div className={`all-sections max-w-[600px] w-full mx-auto`}>

                <Rest/>
                <div className='search mx-auto flex items-center justify-between'>
                    <input type="text" placeholder='Напишите что-нибудь'/>
                    <div
                        className='flex items-center gap-[15px]'
                    >
                        <PhotoIcon/>
                        <GetSearch/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSections;