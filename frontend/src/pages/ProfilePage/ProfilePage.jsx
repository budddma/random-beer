import React from 'react';
import s from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import templateAva from '../../assets/templateAva.png';
import list from '../../assets/list.svg';

const tags1 = [
    "Мужчину",
    "Женщину",
    "Компанию",
    "Собеседника",
    "Друга",
    "Подругу",
    "Коллегу"
]

const tags2 = [
    "Онлайн",
    "Встречи",
    "Тренировки",
    "Активный отдых",
    "Культурный отдых",
    "Кино",
    "Мероприятия",
    "Прогулки",
    "Путешествия",
    "Поход",
    "Игры",
    "Бар",
    "Кафе",
    "Ресторан",
    "Клуб",
    "Взаимопомощь",
    "Обмен"
]

const ProfilePage = () => {
    return (
        <div className={s.container}>
            <Header isAuth={true}/>

            <main className={s.main}>
                <div className={s.topBlock }>
                    <div className={s.mainAccount}>
                        <div className={s.mainAccount__top  + " " + s.block}>
                            <h4 className={s.blockHeading}>
                                Аккаунт
                            </h4>
                            <Input  label={"Email"} type={"email"} required/>
                            <Input label={"Пароль (не менее 6 символов)"} type={"password"} withHiddenToggler required/>
                        </div>
                        <div className={s.mainAccount__bottom  + " " + s.block}>
                            <h4 className={s.blockHeading}>
                                Фото профиля
                            </h4>
                            <div className={s.galleryAvatar}>
                                <div className={s.galleryAvatar__left}>
                                    <img src={templateAva} alt="your avatar"/>
                                </div>
                                <div className={s.galleryAvatar__right}>
                                    <img src={templateAva} alt="your avatar"/>
                                    <img src={templateAva} alt="your avatar"/>
                                </div>

                            </div>
                            <button className={s.changePhotoButton}>
                                Выбрать фото
                            </button>
                        </div>
                    </div>
                    <div className={s.mainInfo}>
                        <div className={s.block}>
                            <h4 className={s.blockHeading}>
                                Общая информация
                            </h4>
                            <Input label={"Имя"} type={"text"} required/>
                            <Input label={"Город"} type={"text"} required/>
                            <Input label={"Дата рождения"} type={"date"} required/>

                            <div className={s.genderSelect}>
                                <div className={s.label}>
                                    Пол <span>*</span>
                                </div>
                                <div className={s.selectBlock}>
                                    <div className={s.genderItem}>Мужской</div>
                                    <div className={s.genderItem}>Женский</div>
                                </div>
                            </div>

                            <Input textarea label={"О себе"} />
                        </div>
                    </div>
                    <div className={s.mainInterest}>
                        <div className={s.block}>
                            <h4 className={s.blockHeading}>
                                Интересы
                            </h4>
                            <div className={s.whoImSearching}>
                                <div className={s.label}>
                                    Кого ищу
                                </div>
                                <div className={s.tags}>
                                    {
                                        tags1.map((tag) => {
                                            return <div className={s.tag} key={tag}>{tag}</div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className={s.format}>
                                <div className={s.label}>
                                    Формат
                                </div>
                                <div className={s.tags}>
                                    {
                                        tags2.map((tag) => {
                                            return <div className={s.tag} key={tag}>{tag}</div>
                                        })
                                    }
                                </div>
                            </div>

                            <div className={s.hobbies}>
                                <Input label={"Увлечения"} placeholder={"Поиск"} />
                                <button>
                                    <img src={list} alt="list"/>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <button className={s.buttonBottom}>сохранить</button>
            </main>

            <Footer/>
        </div>
    );
};

export default ProfilePage;
