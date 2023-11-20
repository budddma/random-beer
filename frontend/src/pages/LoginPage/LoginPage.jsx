import React from 'react';
import s from "./LoginPage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import {AppRoutes} from "../../globals/AppRoutes";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
        navigate(AppRoutes.MEETINGS);
    }

    return (
        <div className={s.container}>
        	<Header isAuth={false}/>
            <main className={s.main}>
				<div className={s.mainAccount}>
						<h4 className={s.blockHeading}>
                                Введите Email и Пароль, чтобы войти или зарегистрироваться
                         </h4>
					<Input label={"Email"} type={"email"} required/>
					<Input label={"Пароль (не менее 6 символов)"} type={"password"} withHiddenToggler required/>
				</div>
				<button onClick={handleLogin} className={s.buttonBottom}>Войти</button>
            </main>
            <Footer/>
        </div>
    );
};

export default LoginPage;