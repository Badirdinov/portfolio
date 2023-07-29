import React from 'react';


import Avatar from '../../images/avatar.jpeg'
import {Instagram, Pinterest, Vk} from "../../images/svg";

const Main = () => {
    return (
        <div className={`main w-[300px]`}>
            <div className={`main__item`}>
                <div className={`main__item--avatar`}>
                    <img src={Avatar} alt="/"/>
                </div>
            </div>
            <div className={`main__text text-center pt-[69px] px-[20px]`}>
                <div className={`main__text--item  mb-[30px]`}>
                    <h5>Азизбек Бадирдинов</h5>
                    <p>блог front-end разработчика</p>
                    <div className={`main__text--item__icons`}>
                        <a href="/">
                            <Instagram/>
                        </a>
                        <a href="/">
                            <Vk/>
                        </a>
                        <a href="/">
                            <Pinterest/>
                        </a>
                    </div>
                </div>
                <div className={`main__text--desc`}>
                    <p>
                        Front-end разработчик. Практик верстки сайтов.
                        Созданием сайтов занимаюсь с 2012 года. Работал
                        в нескольких ИТ компаниях и наработал более
                        10 000 часов в создании сайтов различной сложности.
                    </p>
                </div>
                <div className={`main__text--btns`}>
                    <button className={`main__text--btns__red`}>
                        Мои работы
                    </button>
                    <button className={`main__text--btns__blue`}>
                        Написать мне
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;