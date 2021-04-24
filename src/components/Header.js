import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    left:0;
    top:0;
    z-index: 10;
    width: 100%;
    height: 70px;
    background-color: #040714;
    display: flex;
    align-items: center;
    opacity: 0; 
    transform: translateZ(0);
    transition: opacity .5s ease-out;
    padding: 0 36px;
    `

const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const WrapperRight = styled.div`
    width: 269px;;
    display: flex;
    justify-content: space-between;
`

const GetAll = styled.a`
    font-size: 15px;
    padding: 8px 16px;
    margin: 0;
    text-decoration: none;
    text-transform: uppercase;
    border: 1px solid #1763e5;
    font-weight: 600;
    background-color: #1763e5;
    transition: background-color 0.3s ease-in-out; 
    border-radius: 4px;
    :hover {
        background-color: #1d83ee;
    }

`

const NavInitial = styled.nav`
    position: fixed;
    left:0;
    top:0;
    z-index: 10;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 1; 
    padding: 0 36px;

`
const Login = styled.a`
    font-size: 15px;
    padding: 8px 16px;
    margin: 0;
    text-decoration: none;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    font-weight: 600;
    transition: background-color 0.3s ease;
    border-radius: 4px;
    :hover {
        background-color: #f9f9f9;
        color: black;
    }
`

const Logo = styled.img`
    width: 80px;
    object-fit: contain;
`



function Header() {
    document.addEventListener("scroll", () => {
        const yoffset = window.pageYOffset;
        console.log(yoffset);
        if(yoffset >= 923) {
            document.querySelector(".header").style.opacity = 1;
            document.querySelector(".header").style.zIndex = 11;
        } else {
            document.querySelector(".header").style.opacity = 0;
            document.querySelector(".header").style.zIndex = 9;

        }
    });

    return (
        <>
            <NavInitial>
                <Login href="/login">log in</Login>
            </NavInitial>
            <HeaderContainer className="header">
                <Nav>
                    <Logo src="/images/logo.svg"  alt="disney logo" />
                    <WrapperRight>
                        <GetAll href="/login">get all three</GetAll>
                        <Login href="/login">log in</Login>
                    </WrapperRight>
                </Nav>
            </HeaderContainer>
        </>
    )
}

export default Header
