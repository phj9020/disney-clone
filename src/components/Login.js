import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100vh;
    text-align: center;
`

const Content = styled.div`
    width: 100%;
    margin-bottom: 10vw;
    position: relative;
    min-height: 100vh;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;

`

const BgImg = styled.div`
    height: 100%;
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: absolute;
    left:0;
    top:0;
    right: 0;
    z-index: -1;
` 

const CTA = styled.div`
    max-width: 750px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    p {
        font-size: 12px;
        color: hsla(0,0%,75.3%,.8);
        margin-bottom: 24px;
        a {
            font-size: 12px;
            text-decoration: underline;
            color: #F9F9F9;
        }
    }
    
`

const CTALogoOne = styled.img`
    width: 100%;
    max-width: 700px;
    object-fit: contain;
    margin-bottom: 12px;
    `

const SignUp = styled.a`
    width: 100%;
    height: 60px;
    background-color: #1763e5;
    font-weight: 600;
    font-size: 1.125em;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-bottom: 30px;
    transition: background-color 0.2s ease-in-out;

    :hover {
        background-color: #1d83ee;
    }
`

const CTALogoTwo = styled.img`
    width: 100%;
    max-width: 600px;
    object-fit: contain;
`

const SignForDisney = styled.a`
        font-weight: bold;
        color: #F9F9F9;
        font-size: 1.1em;
        margin-top: 20px;
        text-decoration: underline;
`

const Price = styled.span`
    color: hsla(0,0%,75.3%,.8);
    font-size: 1.1em;
    font-weight: 600;
`

function Login() {
    return (
        <LoginContainer>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="hulu Disney ESPN logo" />
                    <SignUp href="/">GET THE DISNEY BUNDLE</SignUp>
                    <p>Stream now. <a href="/">Terms apply.</a></p>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="hulu Disney ESPN logo" />
                    <SignForDisney href="/">Sign up for Disney+ only.</SignForDisney>
                    <Price>$7.99/month or $79.99/year.</Price>
                </CTA>
                <BgImg />
            </Content>
        </LoginContainer>
    )
}

export default Login;
