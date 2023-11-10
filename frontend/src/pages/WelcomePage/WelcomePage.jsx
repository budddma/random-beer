import React from 'react';
import Header from "../../components/Header/Header";
import s from './WelcomePage.module.css';
import Footer from "../../components/Footer/Footer";

const WelcomePage = () => {
    return (<div className={s.container}>
        <Header isAuth={false}/>

        <main className={s.main}>
            <div className={s.mainContent}>
                <div className={s.contentLeft}>
                    <h1 className={s.contentLeft__heading}>Находи случайные знакомства</h1>
                    <p className={s.contentLeft__text}>
                        Расскажи о себе, своих интересах,
                        увлечениях и найди собеседника для встречи за кружечкой пенного
                    </p>
                </div>
                <div className={s.contentRight}>
                    <div className={s.slider}>
                        <div className={s.topCard + " " + s.card}>
                            <div className={s.card__info}>
                                <h2 className={s.name}>Присоединяйся к другим пользователям!</h2>
                                <p className={s.description}>Чтобы получить доступ ко всем функциям сайта, необходимо войти или зарегистрироваться.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <Footer/>
    </div>);
};

export default WelcomePage;
