import React from 'react';
import s from "./Footer.module.css";


const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
               
                По любым вопросам вы можете
                обратиться к https://t.me/budddma
            </div>
        </footer>
    );
};

export default Footer;
