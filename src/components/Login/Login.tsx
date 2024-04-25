import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {maxLengthCreator, required} from "../../utils/validators/required";
import {createField, Input} from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import s from "./../common/FormControls/FormControls.module.css"


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl?: string | null
    captcha: string
}

let maxLength10 = maxLengthCreator(40)

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


// const MyForm: React.StatelessComponent<Props & InjectedFormProps<{}, Props>>
const LoginForm: React.FC<InjectedFormProps<FormDataType, {captchaUrl: string}> & {captchaUrl: string}> = ({handleSubmit, error, captchaUrl}) => {
  //  console.log(captchaUrl)
    return (
        <form onSubmit={handleSubmit}>
            {/*<div>*/}
                {/*<Field placeholder={'Email'} component={Input} name={'email'}*/}
                {/*       validate={[required]}*/}
            {/*</div>*/}
            {createField("Email", Input, "email", [required])}
            {/*<div>*/}
            {/*    <Field placeholder={'Password'} component={Input} name={'password'} type={"password"}*/}
            {/*           validate={[required, maxLength10]}*/}
            {/*    />*/}
            {/*</div>*/}
            {createField('Password', Input, "password", [required, maxLength10])}
            <div>
                <Field type={"checkbox"} component={Input} name={'rememberMe'}/> Remember me
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Captcha', Input, "captcha", [required, maxLength10])}
                {error && <div className={s.formSummeryError}>
                    {error}
                </div>
                }
            <button> Login </button>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType, {captchaUrl: string}>({
    form: 'email',
})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
            props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    console.log(props)

    return <div className={s.login}>
        <h1> LOGIN </h1>
        <LoginReduxForm captchaUrl={props.captchaUrl}
                        onSubmit={onSubmit} />
    </div>
}




export default connect(mapStateToProps, {login}) (Login);