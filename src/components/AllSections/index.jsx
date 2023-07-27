import React from 'react';





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
            <header>
                <ul>
                    {Links.map((link) => (
                        <li key={link.id}><a href={link.path}>{link.name}</a></li>
                    ))}
                </ul>
            </header>
        </div>
    );
};

export default AllSections;