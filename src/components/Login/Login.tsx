import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {maxLengthCreator, required} from "../../utils/validators/required";
import {Input} from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import s from "./../common/FormControls/FormControls.module.css"


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

let maxLength10 = maxLengthCreator(40)

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} component={Input} name={'email'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={'password'} type={"password"}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={'rememberMe'}/> Remember me
            </div>
                {props.error && <div className={s.formSummeryError}>
                    {props.error}
                </div>
                }
            <button> Login </button>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'email'
})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
            props.login(formData.email, formData.password, formData.rememberMe)
        // console.log(formData)
    }
    console.log(props, 'Login')

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    
    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}




export default connect(mapStateToProps, {login}) (Login);