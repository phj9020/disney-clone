import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 72px;
    `

const MainBackground = styled.div`
    background-color: rgb(26, 29, 41);
    position: fixed;
    height: 100vh;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    padding-top: 72px;
    z-index: -3;
`

function Home({userObj}) {
    return (
        <MainContainer>
            <MainBackground>
                <h1>main</h1>
            </MainBackground>
        </MainContainer>
    )
}

export default Home;
