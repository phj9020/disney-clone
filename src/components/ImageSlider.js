import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Carousel = styled(Slider)`
    margin-top: 20px;

    // arrow button
    & > button {
        opacity: 0;
        width: 5vw;
        height: 100%;
        z-index: 1;
        
        
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease;
        }
    }

    @media screen and (max-width: 768px) {
        & > button {
            width: 10vw;
        }
    }

    ul > li > button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    ul > li.slick-active button:before {
        color: white;
    }

    .slick-list {
        // let next slide shows on the right
        overflow: initial;
    }


    // prev&next button position adjust 
    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    position: relative;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px  -10px;
        cursor:pointer;
        display: block;
        position: relative;
        padding: 4px;
        box-sizing: border-box;
        
        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            padding:0;
            border: 4px solid rgba(255, 255, 255, 0.8);
            transition-duration: 300ms;
        }
    }

`

function ImageSlider() {
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...setting}>
            <Wrap>
                <a href="/home">
                    <img src="/images/sliders/slider-badging.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a href="/home">
                    <img src="/images/sliders/slider-scale.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a href="/home">
                    <img src="/images/sliders/slider-badag.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a href="/home">
                    <img src="/images/sliders/slider-scales.jpg" alt="" />
                </a>
            </Wrap>

        </Carousel>
    )
}

export default ImageSlider;
