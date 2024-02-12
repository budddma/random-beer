import s from "./LoginPage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import {AppRoutes} from "../../globals/AppRoutes";
// import {useNavigate} from "react-router-dom";
import { ApiService } from "../../services/ApiService";
import React, {useState} from 'react';
import hide from '../../assets/hide.svg';


const LoginPage = () => {
	// const navigate = useNavigate();
	// const handleLogin = () => {
    //     navigate(AppRoutes.MEETINGS);
    // }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onAuth = async (event) => {
        event.preventDefault();
        window.localStorage.removeItem("access");
        window.localStorage.removeItem("refresh");

        const { access, refresh } = await ApiService("token/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: email, password }),
        });

        window.localStorage.setItem("access", access);
        window.localStorage.setItem("refresh", refresh);
        window.location.href = "meetings";
    };

    return (
        <div className={s.container}>
        	<Header isAuth={false}/>

            <main className={s.main}>
				<div className={s.mainAccount}>
						<h4 className={s.blockHeading}>
                                Введите Email и Пароль, чтобы войти
                         </h4>
                    <form onSubmit={(event) => event.preventDefault()}>
                    <div className={s.containerr}>
                        {"Email" && <label className={s.label} htmlFor={1}>
                            {"Email"} {<span className={s.required}>*</span>}
                        </label>}
                        {
                                (<input value={email} onChange={(event) => setEmail(event.target.value)} required={true} className={s.input} name={1} id={1} type="email"/>)
                        }
                    </div>
                    <div className={s.containerr}>
                        {"Пароль (не менее 6 символов)" && <label className={s.label} htmlFor={2}>
                            {"Пароль (не менее 6 символов)"} {<span className={s.required}>*</span>}
                        </label>}
                        {
                                (<input value={password} onChange={(event) => setPassword(event.target.value)} required={true} className={s.input} name={2} id={2} type="password"/>)
                        }
                        {<button className={s.buttonHide}>
                           <img src={hide} alt={"hide"}/>
                         </button>}
                    </div>
                    </form>
				</div>
				<button onClick={onAuth} className={s.buttonBottom}>Войти</button>
            </main>
            <Footer/>
        </div>
    );
};

export default LoginPage;