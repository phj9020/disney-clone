import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import {authService} from '../fbase';
import {useDispatch} from 'react-redux';
import {setUserLoginDetails} from '../features/user/userSlice';


const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1a1d29;
    display: flex;
    justify-content: center;
`

const LoginContent = styled.div`
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

const Suggest = styled.div`
    margin-top: 24px;

    span {
        font-size: 15px;
        color: rgb(202, 202, 202);
    }
    a {
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const history = useHistory();
    const dispatch = useDispatch();

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const data = await authService.signInWithEmailAndPassword(email, password)
            console.log(data);
            setUser(data.user);
            history.push("/home");
        } catch (err) {
            setError(err.message);
        }
    }

    const handleChange = (e) => {
        const {target : {name}} = e;
        let value = e.target.value;

        if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        }
    }

    return (
        <LoginContainer>
            <LoginContent>
                <a href="/">
                    <img src="/images/logo.svg" alt="disney logo" />
                </a>
                <h2>Log-In with your email</h2>
                <Form onSubmit={handleSubmit}>
                    {error ? <span>{error}</span> : null}
                    <input name="email" type="email"  value={email} onChange={handleChange}placeholder="Email" required autoComplete="true" />
                    <input name="password" type="password" value={password} onChange={handleChange} placeholder="Password" required autoComplete="true" />
                    <input type="submit" value="continue" />
                </Form>
                <Suggest>
                    <span>New to Disney+? <a href="/signup">Sign up</a></span>
                </Suggest>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login;
