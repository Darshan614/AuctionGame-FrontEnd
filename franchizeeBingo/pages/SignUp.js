import { Fragment } from "react";
import SignUpForm from '../components/SignUp/SignUpForm';
import Router from 'next/router';

function SignUp() {
    const signupcall = (firstname,lastname,username,email,password)=>{
        console.log("signup call");
        console.log("UN",username);
        
        const body = {
            fname:firstname,
            lname:lastname,
            uname:username,
            mail:email,
            password:password,
            rating:0
        }
        console.log("body user",body);
        fetch("http://localhost:8080/signup",{
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
            if(data.message==="Username already exists!" || data.message==="Email already exists!")
            {
                Router.push('/SignUp');
                alert(data.message)
            }
            else
            {
                Router.push('/Login');
            }
            
            
        })
        .catch((err)=>{
            console.log("got error from signin",err);
        })
    }

    return (
        <Fragment >
            <SignUpForm onSignUp={signupcall}></SignUpForm>
        </Fragment>
    )
}

export default SignUp;