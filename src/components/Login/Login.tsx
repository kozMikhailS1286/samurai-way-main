import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {maxLengthCreator, required} from "../../utils/validators/required";
import {Input} from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";


export type FormDataType = {
    login: string
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
                <Field placeholder={'Login'} component={Input} name={'login'}
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
            <button> Login </button>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
            props.login(formData.login, formData.password, formData.rememberMe)
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