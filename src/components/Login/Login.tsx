import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControl";
import {required} from "../../utils/validator/validator";
import {connect} from "react-redux";

type FormDataType = {
    login:string
    password: string
    remember: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type ={'password'} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"remember"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
}) (LoginForm)


const Login = (props:any) => {

    const onSubmit = (formData:FormDataType)=>{
        props.login(formData.login, formData.password, formData.remember)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {Login})(Login)
