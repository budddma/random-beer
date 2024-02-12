import React, {useState} from 'react';
import s from './Input.module.css';
import hide from '../../assets/hide.svg';
const Input = ({label, required, placeholder = "", withHiddenToggler = false, type = "text", textarea = false, my_input = "", my_setInput = ""}) => {
    const id = Math.random().toString().slice(2,6);
    let [input, setInput] = useState(my_input);
    if (my_input) {
        input = my_input;
        setInput = my_setInput
    }
    

    return (
        <div className={s.container}>
            {label &&<label className={s.label} htmlFor={id}>
                {label} {required && <span className={s.required}>*</span>}
            </label>}
            {
                textarea ?
                    (<textarea value={input} onChange={(e) => setInput(e.target.value)} className={s.input} name={id} id={id} cols="20" rows="8" placeholder={placeholder}/>)
                    :
                    (<input value={input} onChange={(e) => setInput(e.target.value)} required={required} className={s.input} name={id} id={id} type={type} placeholder={placeholder}/>)
            }

            {withHiddenToggler && <button className={s.buttonHide}>
                <img src={hide} alt={"hide"}/>
            </button>}
        </div>
    );
};

export default Input;
