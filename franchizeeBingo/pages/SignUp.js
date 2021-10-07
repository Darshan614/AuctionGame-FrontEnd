import { Fragment } from "react";
import SignUpForm from '../components/SignUp/SignUpForm';

const signupcall = (firstname,lastname,username,email,password)=>{
    console.log("signup call");
    console.log("UN",username);
    const body = {
        fname:firstname,
        lname:lastname,
        uname:username,
        mail:email,
        password:password
    }
    fetch("http://localhost:8080/signup",{
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("data ",data)
    })
}

function SignUp() {
    return (
        <Fragment >
            <SignUpForm onSignUp={signupcall}></SignUpForm>
        </Fragment>
    )
}

export default SignUp;