import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {useSelector} from 'react-redux';
import {selectNewDisney, selectOriginal, selectTrending} from '../features/movie/movieSlice';


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

        img.postertext {
            position: absolute;
            top:0;
            left:0;
        }

        &:hover {
            padding:0;
            border: 4px solid rgba(255, 255, 255, 0.8);
            transition-duration: 300ms;

        }
    }

`

function ImageSlider() {
    const newDisneyFromRedux = useSelector(selectNewDisney);
    const originlFromRedux = useSelector(selectOriginal);
    const trendingFromRedux = useSelector(selectTrending);

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
                <a href={trendingFromRedux && `/detail/${trendingFromRedux[2].id}`}>
                    <img src="/images/sliders/slider-simsons.jpeg" alt="" />
                    <img className="postertext" src="/images/sliders/simsons-slider-logo.png" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a href={newDisneyFromRedux && `/detail/${newDisneyFromRedux[0].id}`}>
                    <img src="/images/sliders/slider-falcon.jpeg" alt="" />
                    <img className="postertext" src="/images/sliders/slider-falcon-logo.png" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a href={newDisneyFromRedux && `/detail/${newDisneyFromRedux[1].id}`}>
                    <img src="/images/sliders/slider-raya.jpeg" alt="" />
                    <img className="postertext" src="/images/sliders/raya-slider-logo.png" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a href={originlFromRedux && `/detail/${originlFromRedux[3].id}`}>
                    <img src="/images/sliders/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

        </Carousel>
    )
}

export default ImageSlider;
