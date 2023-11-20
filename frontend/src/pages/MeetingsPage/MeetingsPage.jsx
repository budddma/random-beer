import React from 'react';
import Header from "../../components/Header/Header";
import s from './MeetingsPage.module.css';
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from 'react';
import Input from "../../components/Input/Input";


const filtersTags = [
    "кого ищу",
    "формат",
    "увлечения"
]

const MeetingsPage = () => {

    const [currentMeetings, setCurrentMeetings] = useState([]);
    const [pastMeetings, setPastMeetings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/meetings')
          .then(response => response.json())
          .then(data => {
            const current = data.filter(meeting => meeting.isCurrent);
            const past = data.filter(meeting => !meeting.isCurrent);
    
            setCurrentMeetings(current);
            setPastMeetings(past);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div className={s.container}>
            <Header isAuth={true}/>

            <main className={s.main}>
                <div className={s.leftBlock}>
                    <h1 className={s.leftBlock__title}>Текущие</h1>

                    {currentMeetings.map((meeting) => {
                    return <div key={meeting.id} className={s.card}>
                        <img className={s.image} src={meeting.imageUrl} alt={meeting.id} />
                        <div className={s.card__info}>
                            <h2 className={s.name}>{meeting.name}</h2>
                            <div className={s.tags}>
                                {meeting.tags.map((tag) => {
                                     return <div className={s.tag} key={tag}>{tag}</div>
                                })}
                            </div>
                            <p className={s.description}>{meeting.description}</p>
                            <button className={s.contentLeft__button}>
                                Завершить встречу
                            </button>
                        </div>
                    </div>
                    })}

                    <h1 className={s.leftBlock__title}>Прошедшие</h1>

                    {pastMeetings.map((meeting) => {
                    return <div key={meeting.id} className={s.card}>
                    <img className={s.image} src={meeting.imageUrl} alt={meeting.id} />
                        <div className={s.card__info}>
                            <h2 className={s.name}>{meeting.name}</h2>
                            <div className={s.tags}>
                                {meeting.tags.map((tag) => {
                                     return <div className={s.tag} key={tag}>{tag}</div>
                                })}
                            </div>
                                <p className={s.description}>{meeting.description}</p>
                            <button className={s.contentLeft__button + " " + s.disabled}>
                                    Встреча прошла {meeting.date}
                            </button>
                        </div>
                    </div>
                })}
                </div>
                <div className={s.rightBlock}>
                    <div className={s.filtersContainer}>
                        <h3 className={s.filtersHeading}>
                            Выбери интересы для поиска:

                        </h3>
                        <input className={s.filtersInput} placeholder={"Добавить интересы"} type="text"/>
                        <div className={s.filtersTags}>
                            {
                                filtersTags.map((tag) => {
                                    return <div className={s.filtersTag} key={tag}>{tag}</div>
                                })
                            }
                        </div>
                    </div>

                    <div className={s.filtersContainer}>
                        <h3 className={s.filtersHeading}>
                            Выбери фильтры поиска:
                        </h3>

                        <div className={s.filtersSelect}>
                            <div className={s.label}>
                                Пол
                            </div>
                            <div className={s.selectBlock}>
                                <div className={s.genderItem + " " + s.selected}>Не важно</div>
                                <div className={s.genderItem}>Мужской</div>
                                <div className={s.genderItem}>Женский</div>
                            </div>
                        </div>


                        <Input label={"Город"} placeholder={"Не указан"}/>

                        <div className={s.filtersRange}>
                            <div className={s.label}>
                                <div>
                                Возраст

                                </div>

                                <span className={s.right}>20–45</span>
                            </div>
                            <div className={s.rangeBlock}>
                                <div className={s.rangeStart}></div>
                                <div className={s.rangeEnd}></div>
                                <div className={s.rangeLine}></div>
                                <div className={s.rangeLineActive}></div>

                            </div>
                        </div>

                        <button className={s.contentLeft__button}>
                            НАЙТИ
                        </button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default MeetingsPage;
