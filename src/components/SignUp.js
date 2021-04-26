import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {authService, firebaseInstance} from '../fbase';

const SignUpContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1a1d29;
    display: flex;
    justify-content: center;
`

const SignupContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    width: 374px;
    
        a {
            margin: 0 auto;

            img {
                width: 172px;
                object-fit: contain;
                padding-bottom:24px;
            }
        }
        h2 {
            padding-bottom: 24px;
        }
    `

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    span {
        font-size: 12px;
        color: red;
        margin-bottom: 12px;
    }
    input[type=email], input[type=password] {
        width:100%;
        padding: 7px 12px;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: rgb(49, 52, 62);
        margin-bottom: 24px;
        height: 48px;
        color: white;
        font-size: 15px;
        line-height: 1.5;

        :focus {
            outline :none;
            border: 1px solid lightgray;
        }
    }
    input[type=submit] {
        all: unset;
        height: 48px;
        background-color:#1872d3;
        border-radius: 4px;
        letter-spacing: 1.5px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        :hover { 
            background-color: #1d83ee;
        }
    }
`
const LoginWithGoogleAccount = styled.div`
    margin-top: 24px;

    button {
        border: 1px solid transparent;
        border-radius: 4px;
        width: 100%;
        padding: 14px 0px;
        color: #f9f9f9;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 600;
        background-color: #39b44a;
        cursor: pointer;

        :focus {
            outline: none;
        }
    }

`


function SignUp() {
    const [newAccount, setNewAccount] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    let history = useHistory();

    const handleChange = (e) => {
        const {target : {name, value}} = e;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(newAccount) {
                await authService.createUserWithEmailAndPassword(email, password);
                setNewAccount(false);
                history.push("/home");
            } else if(newAccount === false){
                setError("This email is already exists");
            }

        } catch (err) {
            setError(err.message);
        }
    }

    const handleGoogleSingIn = async(e) => {
        e.preventDefault();
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
        setNewAccount(false);
        history.push("/main");

    }

    return (
        <SignUpContainer>
            <SignupContent>
                <a href="/">
                    <img src="/images/logo.svg" alt="disney logo" />
                </a>
                <h2>Sign Up For Your Account</h2>
                <Form onSubmit={handleSubmit}>
                    <span>{error}</span>
                    <input name="email" type="email" value={email}  onChange={handleChange} placeholder="Email" required autoComplete="true" />
                    <input name="password" type="password" value={password} onChange={handleChange} placeholder="Password" required autoComplete="true" />
                    <input type="submit" value="continue" />
                </Form>
                <LoginWithGoogleAccount>
                    <button onClick={handleGoogleSingIn}>Continue with Google Account</button>
                </LoginWithGoogleAccount>
            </SignupContent>
        </SignUpContainer>
    )
}

export default SignUp
