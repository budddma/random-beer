import React from 'react';
import s from './Header.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../globals/AppRoutes";
import arrow from '../../assets/arrow.png'

const links = [
    {
        to: AppRoutes.MEETINGS,
        text: 'Встречи'
    },
    {
        to: AppRoutes.PROFILE,
        text: 'Профиль'
    },
]

const Header = ({isAuth}) => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const handleLogout = () => {
        navigate(AppRoutes.WELCOME);
    }
    const handleLogin = () => {
        navigate(AppRoutes.LOGIN);
    }

    console.log(pathname, AppRoutes.MEETINGS)
    return (
        <header className={s.container + ' ' + (isAuth ? s.auth : s.unAuth)}>

            <div className={s.logo}>
                Random
                <span className={s.logoBeer}>Beer</span>
            </div>
            {
                isAuth && <div className={s.nav}>
                    {
                        links.map(({to, text}) => (
                            <button
                                onClick={() => navigate(to)}
                                key={text}
                                className={s.link + ' ' + (pathname === to ? s.active : '')}
                            >
                                {text}
                            </button>
                        ))
                    }
                </div>
            }

            {
                isAuth && <button onClick={handleLogout} className={s.buttonClear}>
                    <img src={arrow} alt="button"/>
                </button>
            }
            {!isAuth && <button onClick={handleLogin} className={s.button}>
                Войти
            </button>}
        </header>
    );
};

export default Header;