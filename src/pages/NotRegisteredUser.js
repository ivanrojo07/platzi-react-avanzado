import React, { Fragment, useContext } from "react";
import { UserForm } from "../components/UserForm";
import {Context} from "../Context";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";



export const NotRegisteredUser = ()=>{
    const { activateAuth } = useContext(Context)
    const [registerMutation, {data:register_data, loading:register_loading, error:register_error} ] = RegisterMutation()
    const [loginMutation, {data:login_data, loading:login_loading, error:login_error}] = LoginMutation();
    
    const handleRegisterClick = ({email,password})=>{
        
        // console.log({email, password});
        
        registerMutation({variables:{"input":{
            "email":email.value,
            "password":password.value
        }}}).then(response=>{
            let data = response.data
            if(data.signup){
                console.log(data.signup)
                activateAuth(data.signup)
            }
        })
    }
    const handleLoginClick = ({email,password})=>{
        
        // console.log({email, password});
        
        loginMutation({variables:{"input":{
            "email":email.value,
            "password":password.value
        }}}).then(response=>{
            let data = response.data
            if(data.login){
                console.log(data.login)
                activateAuth(data.login)
            }
        })
    }
    return <Fragment>
        <UserForm title={"Registrate"} onSubmit={handleRegisterClick} loading={register_loading} error={register_error}/>
        <UserForm title={"Iniciar Sesión"} onSubmit={handleLoginClick} loading={login_loading} error={login_error}/>
    </Fragment>
    
}
