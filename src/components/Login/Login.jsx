import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit} action="">
            <Field component={"input"} type="text" name='login' placeholder='login/email'/>
            <Field component={"input"} type="password" name='password' placeholder='password'/>
            <div>
                <Field component={"input"} name='remember' type="checkbox"/> remember me
            </div>
            <button>log in</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = props => {
    const onSubmit = (formData)=>{
        console.log(formData)
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login