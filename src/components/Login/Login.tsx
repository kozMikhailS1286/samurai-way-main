import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "./../../components/common/FormControls/FormControls";
import {maxLengthCreator, required} from "./../../utils/validators/required";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

let maxLength10 = maxLengthCreator(10)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name={'login'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={'password'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={'rememberMe'}/> Remember me
            </div>
            <button> Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }


    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;