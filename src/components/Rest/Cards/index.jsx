import React from 'react';


import './cardStile.scss'

const Cards = ({title, date, image}) => {
    return (
        <div className={`card`}>
            <div className='fon'></div>
            <img src={image} alt=""/>
            <h5>{title}</h5>
            <p>{date}</p>
        </div>
    );
};

export default Cards;