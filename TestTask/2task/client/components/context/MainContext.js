import { createContext, useContext, useState } from 'react';
const MainContext = createContext();

//тут конечно надо данные с сервера получать, но времени не хватало писать сервер.
export const MainProvaider = ({ children }) => {
    const navigation = [
        {
            title: 'Услуги',
            link: '/services'
        },
        {
            title: 'Виджеты',
            link: '/widgets'
        },
        {
            title: 'Интеграции',
            link: '/integariotion'
        },
        {
            title: 'Кейсы',
            link: '/keys'
        },
        {
            title: 'Сертификаты',
            link: '/sertificates'
        }
    ];

    const params = {
        phones: [
            {
                phone: '+7 555 555-55-55',
                link: 'tel:+7 555 555-55-55'
            },
        ],
        socials: [
            {
                icon: './img/icons/whatsap.svg ',
                link: 'https://t.me/blablalba',
            },

            {
                icon: './img/icons/phone.svg',
                link: 'tel:+12215555555',
            },
            {
                icon: './img/icons/telegram.svg',
                link: 'https://wa.me/2217777777',
            },
        ],
        contacts: [
            {
                address: 'Москва, Путевой проезд 3с1, к 902',
                link: '/map'
            }
        ]
    }

    const hero = [
        {
            title: 'Зарабатывайте больше | c WELBEX',
            text: 'Развиваем и контролируем продажи за вас',
            infoblock: {
                title: 'Вместе c | бесплатной консультацией | мы дарим:',
                content: [
                    {
                        title: 'Виджеты',
                        text: '30 готовых решений',
                    },
                    {
                        title: 'Dashboard',
                        text: 'с показателями вашего бизнеса',
                    },
                    {
                        title: 'Skype Аудит',
                        text: 'отдела продаж и CRM системы',
                    },
                    {
                        title: '35 дней',
                        text: 'использования CRM',
                    },
                ],
                contentMobile: [
                    {
                        title: 'Skype аудит',
                    },
                    {
                        title: '30 виджетов',
                    },
                    {
                        title: 'Dashboard',
                    },
                    {
                        title: 'Месяц аmoCRM',
                    }
                ]
            },
        },
    ]

    const value = {
       navigation, params, hero
    }

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);