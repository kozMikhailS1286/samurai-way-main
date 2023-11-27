import React from 'react'
import {Field, reduxForm} from "redux-form";


const LoginForm = () => {
    return (
        <form>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'} />
            </div>
            <div>
                <Field type={"checkbox"} component={'input'} name={'rememberMe'}/> Remember me
            </div>
            <button> Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm />
    </div>
}

export default Login;