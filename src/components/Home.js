import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 72px;
    `

const MainBackground = styled.div`
    background-color: rgb(26, 29, 41);
    min-height: 100vh;
    height: 100%;
    transition: opacity 200ms ease 0s;
    width: 100%;
    padding: 0 calc(3.5vw + 24px);
    
`

function Home() {
    return (
        <MainContainer>
            <MainBackground>
                <ImageSlider />
                <Viewers />
            </MainBackground>
        </MainContainer>
    )
}

export default Home;
