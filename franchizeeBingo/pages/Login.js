import { Fragment } from "react";
import LoginForm from '../components/Login/LoginForm';
import Router from 'next/router';

const onLogin = (username,password)=>{
    const body = {
        uname:username,
        password:password
    }
    fetch("http://localhost:8080/login",{
            method: "post",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
        .then((res)=>{
            if(!res.ok)
            {
                throw new Error(res.status);
            }
            else
            {
                console.log("all ok");
                return res.json();
            }
        })
        .then((data)=>{
            console.log("data from signin",data);
            if(data.message==="Username not found" || data.message==="Invalid Password!")
            {
                alert(data.message);
                Router.push('/Login');
            }
            else
            {
                if(data.accessToken){
                    localStorage.setItem("user",JSON.stringify(data));
                }

                Router.push('/');
            }
            
        })
        .catch((err)=>{
            console.log("got error from signin",err);
        })
}

function Login() {
    return (
        <Fragment >
            <LoginForm onLogin={onLogin}></LoginForm>
        </Fragment>
    )
}

export default Login;