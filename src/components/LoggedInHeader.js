import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {authService} from '../fbase';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserPhoto, setUserLoginDetails, loggedInState} from '../features/user/userSlice';


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

            &:hover:after {
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

const DropDown = styled.div`
    position: absolute;
    top:60px;
    right: 0px;
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    text-align:center;
    width: 100px;
    opacity: 0;
`

const NavRight= styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    &:hover {
        ${DropDown} {
            transition-duration: 1s;
        }
    }
`

function LoggedInHeader() {
    const history =useHistory();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(loggedInState);
    console.log(isLoggedIn)
    const userPhoto = useSelector(selectUserPhoto);

    const logOut= async(e) => {
        e.preventDefault();
        await authService.signOut();
        history.push("/");
    }

    const showSubMenu = () => {
        document.querySelector("#dropdown_menu").style.display= "block";
        document.querySelector("#dropdown_menu").style.opacity= 1;
        
    }
    
    const hideSubMenu = () => {
        if(isLoggedIn) {
            document.querySelector("#dropdown_menu").style.display= "none";
            document.querySelector("#dropdown_menu").style.opacity= 0;
        } 
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    
    useEffect(()=> {
        document.querySelector("#dropdown").addEventListener("mouseenter", showSubMenu);
        document.querySelector("#headerContainer").addEventListener("mouseleave", hideSubMenu);
        
        authService.onAuthStateChanged((user)=> {
            if(user) {
                console.log(user);
                setUser(user);
            }
        })
        
    })

    return (
        <HeaderContainer id="headerContainer">
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
                </NavLeft>
                <NavRight>
                    <img src={!userPhoto ? `/images/icons/mickey-mouse.gif` : userPhoto} alt="user icon" id="dropdown" />
                    <DropDown id="dropdown_menu">
                        <span onClick={logOut}>Log out</span>
                    </DropDown>
                </NavRight>
            </Nav>
        </HeaderContainer>
    )
}



export default LoggedInHeader;
