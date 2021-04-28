import React from 'react';
import styled from 'styled-components';

const ViewerContainer = styled.div`
    margin-top: 30px;
    padding: 30px 0px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));

    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px  -10px;
    border: 3px solid rgba(249,249,249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
    overflow: hidden;
    position:relative;

    img {
        /* inset: 0px; */
        width: 100%;
        height: 100%;
        object-fit:cover;
        display: block;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        z-index: 1;
        position: absolute;
        top: 0;
    }
    
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        opacity: 0;
    }


    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px  -10px;
        border-color:rgba(255, 255, 255, 0.8);
        transform: scale(1.05);
        
        video {
            opacity: 1;
            transform: scale(1.05);
        }
    }
`

function Viewers() {
    return (
        <ViewerContainer>
            <Wrap>
                <img src="images/viewers/viewers-disney.png" alt="disney" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers/viewers-pixar.png" alt="pixar" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers/viewers-marvel.png" alt="marvel" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers/viewers-starwars.png" alt="starwars" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers/viewers-national.png" alt="national" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
            
        </ViewerContainer>
    )
}

export default Viewers
