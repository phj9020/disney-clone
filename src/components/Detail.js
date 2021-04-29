import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {dbService} from '../fbase';

const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 135vh;
    display:block;
    position: relative;
    padding: 72px calc(3.5vw + 5px);
    overflow-x: hidden;

    @media screen and (max-width:768px){
        min-height: 90vh;
    }
`

const Background = styled.div`
    position: fixed;
    top: 72px;
    left: 0;
    opacity: 0.8;
    z-index: -1;

    img {
        width: 100vw;
        object-fit: contain;

        @media screen and (max-width:768px){
            width: 130vw;
        }
        
    }
`

const ImageTitle = styled.div`
    width: 100%;
    height: 30vw;
    min-height: 170px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    -webkit-box-pack: start;
    margin: 0px auto;
    padding-bottom: 24px;

    img {
        max-width: 600px;
        min-width: 150px;
        width:35vw;
    }
`
const ContentMeta = styled.div`
    max-width: 874px;
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: 24px 0px;
    min-height: 56px;
`
const Player = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border:none;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249,249,249);
    color: rgb(0,0,0);

    img {
        width: 32px;
    }

    &:hover{ 
        background:rgb(198,198,198);
    }

    @media screen and (max-width:768px){
        height: 45px;
        padding: 0px 22px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
    }
`

const Trailer = styled(Player)`
    background: rgb(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`
const AddList = styled.div`
    margin-right: 16px;
    min-height:44px;
    min-width:44px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;

    span {
        background-color: rgb(249,249,249);
        display: inline-block;

        &:first-child {
            width: 16px;
            height: 2px;
            transform: translate(1px , 0px) rotate(0deg);
        }

        &:nth-child(2) {
            height: 16px;
            width: 2px;
            transform: translateX(-8px) rotate(0deg);
        }
    }
`

const GroupWatch = styled(AddList)`
    margin-right:0px;

    img {
        width: 100%;
    }
    
`
const Subtitle = styled.div`
    min-height: 20px;

    h3 {
        color: rgb(249,249,249);
        font-size: 15px;
    }
    
    @media screen and (max-width:768px){

        h3 {
            font-size: 12px;
        }
    }
    `

const Description = styled.div`
    padding: 16px 0px;

    p {
        line-height:1.5;
        font-size: 20px;
        color: rgb(249,249,249);
    }

    @media screen and (max-width:768px){

        p {
            font-size: 14px;
        }
    }
`


function Detail() {
    // get movie id from url
    const {id} = useParams();
    console.log(id);

    const [detailData, setDetailData] = useState({});

    console.log(detailData);
    
    useEffect(()=> {
        window.scrollTo(0,0);

        // get data from firebase using movie id 
        const getData = async() => {
            try {
                const detail = await dbService.collection("movies").doc(id).get();
                let detailObj = detail.data();
                if(detailObj) {
                    setDetailData(detailObj);
                } else {
                    console.log("No such document in Firebase!");
                }
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, [id])

    return (
        <DetailContainer>
            <HelmetProvider>
                <Helmet>
                    <title>movie name | Disney Clone</title>
                </Helmet>
            </HelmetProvider>
            <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/icons/play-icon-black.png" alt="play-icon-black" />
                        <span>Play</span> 
                    </Player>
                    <Trailer>
                        <img src="/images/icons/play-icon-white.png" alt="play-icon-white" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span/>
                        <span/>
                    </AddList>
                    <GroupWatch>
                            <img src="/images/icons/group-icon.png" alt="group" />
                    </GroupWatch>
                </Controls>
                <Subtitle>
                    <h3>{detailData.subTitle}</h3>
                </Subtitle>
                <Description>
                    <p>{detailData.description}</p>
                </Description>
            </ContentMeta>
        </DetailContainer>
    )
}

export default Detail
