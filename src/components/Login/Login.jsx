import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../helpers/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../Login/Login.module.css';


const maxLenght20 = maxLenghtCreator(20);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div className={s.box}>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                {createField('Email', 'text', 'email', Input, [required, maxLenght20])}
                {createField('Password', 'password', 'password', Input, [required, maxLenght20])}
                {captchaUrl && <img alt='' src={captchaUrl}/> }
                {captchaUrl && createField('Symbols from image', 'text', 'captcha',Input,[required]) }
                {/*{createField(null, 'checkbox', 'rememberMe', Input, null, null, 'Remember me')}*/}
                {error && <div> {error} </div>}
                <div>
                    <button type={'submit'}>Login</button>
                </div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};
const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});
export default connect(MapStateToProps, {login})(Login);
