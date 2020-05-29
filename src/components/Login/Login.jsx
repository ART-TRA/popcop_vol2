import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit} action="">
            <Field component={Input} type="text" name='login' placeholder='login/email' validate={[required]}/>
            <Field component={Input} type="password" name='password' placeholder='password' validate={[required]}/>
            <div>
                <Field component={'input'} name='rememberMe' type="checkbox"/> remember me
            </div>

            {/*div покажется если будут ошибки, нужно застилизовать!!!!*/}
            {props.error && <div>{props.error}</div>}

            <button>log in</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = props => {
    const onSubmit = (formData)=>{
        props.login(formData.login, formData.password, formData.rememberMe);
    };

    if(props.isAuth) return <Redirect to='/profile'/>;

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);