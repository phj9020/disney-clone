import React from 'react';
import styled from 'styled-components';
import {authService} from '../fbase';

const HeaderContainer = styled.header`
    position: fixed;
    left:0;
    top:0;
    z-index: 10;
    width: 100%;
    height: 72px;
    background-color: #040714;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

const NavLeft=styled.div`
    display: flex;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
    }
`

const Logo = styled.img`
    width: 80px;
    object-fit: contain;
`

const MenuContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-transform: uppercase;
    flex-direction: column;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        padding: 16px 18px;

        span {
            width: 24px;
            height: 20px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        p {
            color: rgb(249, 249, 249);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1.42px;
            line-height: 1.08;
            margin-left: 8px;
            margin-top: 13px;
            margin-bottom: 13px;
            white-space: nowrap;
            position: relative;

            :hover:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -7px;
                height:2px;
                width: 100%;
                animation: underline 0.2s ease;
                background-color: white;
            }

            @keyframes underline {
                from {
                    width: 0%;
                }
                to{
                    width: 100%;
                }
            }
        }


    }
    
`


const NavRight= styled.div`
    img {
        width: 48px;
        object-fit: contain;
    }
`

function LoggedInHeader() {
    
    const logOut= async(e) => {
        e.preventDefault();
        await authService.signOut();
    }

    return (
        <HeaderContainer>
            <Nav>
                <NavLeft>
                    <a href="/home">
                        <Logo src="/images/logo.svg"  alt="disney logo" />
                    </a>
                    <ul>
                        <MenuContainer>
                            <a href="/home">
                                <span>
                                    <img src="/images/icons/home-icon.svg" alt="home" />
                                </span>
                                <p>Home</p> 
                            </a>
                        </MenuContainer>
                        <MenuContainer>
                            <a href="/home">
                                <span>
                                    <img src="/images/icons/search-icon.svg" alt="home" />
                                </span>
                                <p>Search</p> 
                            </a>
                        </MenuContainer>
                        <MenuContainer>
                            <a href="/home">
                                <span>
                                    <img src="/images/icons/watchlist-icon.svg" alt="home" />
                                </span>
                                <p>Watchlist</p> 
                            </a>
                        </MenuContainer>
                        <MenuContainer>
                            <a href="/home">
                                <span>
                                    <img src="/images/icons/original-icon.svg" alt="home" />
                                </span>
                                <p>Originals</p> 
                            </a>
                        </MenuContainer>
                        <MenuContainer>
                            <a href="/home">
                                <span>
                                    <img src="/images/icons/movie-icon.svg" alt="home" />
                                </span>
                                <p>movies</p> 
                            </a>
                        </MenuContainer>
                        <MenuContainer>
                            <a href="/home">
                                <span>
                                    <img src="/images/icons/series-icon.svg" alt="home" />
                                </span>
                                <p>series</p> 
                            </a>
                        </MenuContainer>
                    </ul>
                    <button onClick={logOut}>logout</button>
                </NavLeft>
                <NavRight>
                    <img src="/images/icons/group-icon.png" alt="group-icon" />
                </NavRight>
            </Nav>
        </HeaderContainer>
    )
}

export default LoggedInHeader;
