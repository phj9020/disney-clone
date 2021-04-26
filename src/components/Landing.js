import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';

const Container = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    position: relative;
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

const ArrowDown = styled.div`
    width: 100%;
    padding: 10px 0px;
    position: absolute;
    bottom:0;
    left:0;
    animation: arrow 0.7s infinite;
    display: block;

    svg {
        fill: #f9f9f9;
        height: 30px;
        object-fit: contain;
        cursor: pointer;
    }

    @keyframes arrow {
        0% { bottom:0}
        50% {bottom: -3px}
        60% {bottom: 0px}
        75% {bottom: 5px}
        85% {bottom: 2px}
        95% {bottom: 2px}
        100% {bottom: 0}
    }
`

const CardContent = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        padding:50px 35px;
    }
`

const PictureContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    img {
        display: block;
        width: 100%;
        max-width: 654px;
        min-width: 360px;
        object-fit: contain;
    }

    @media screen and (max-width: 1000px){
        width: 100%;

        img {
            max-width: 500px;
        }
    }

`

const PosterText = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    margin-top:20px;
    width: 50%;
    max-width: 648px;
    padding: 0px 52px;
    
    h2 {
        font-size: 2.625em;
        margin-bottom: 24px;
    }
    p {
        font-size: 1.25em;
        color: hsla(0,0%,75.3%,.8);
        margin-bottom: 16px;
    }

    a {
        width: 100%;
        max-width: 360px;
        background-image: linear-gradient(135deg ,#7cbfce,#adeae8,#7cbfce);
        padding: 16.5px 14px;
        border: 1px solid transparent;
        border-radius:4px;
        box-sizing: border-box;
        text-decoration: none;
        color: #000000;
        font-size: 18px;
        font-weight:600;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 1000px){
        width: 100%;
        padding: 0px;
    }
`

const CaptionContainer = styled.section`
    width: 100%;
    min-height:48vw;
    position: relative;
    overflow: hidden;
    display: flex;

`
const Wrapper = styled.div`
    width: 40%;
    height: 100%;
    min-height: 48vw;
    display:flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1000px) {
        width: 65%;
    }
`

const Meta =styled.div`
    padding-left: 12%;

    .heading {
        font-size: 2.625em;
        margin-bottom: 24px;
    }

    .richtext {
        font-size: 1.25em;
        color: lightgray;

            ul > li {
            margin-bottom: 15px;
            }
        }

    @media screen and (max-width:1000px) {
        padding-left: 20px;
        padding-top: 12%;
        padding-bottom: 12%;

        .heading {
            font-size: 2em;
        }
    }
`

const BgImgSecond = styled.div`
    background-image: url("/images/backgrounds/Soul_Groupwatch_Module_Desktop@2x_V4.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    height: 100%;
`


const StreamWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 50px 35px;
    }
    `

const MetaStream = styled.div`
    width: 45%;
    padding-right: 5%;
    h2 {
        font-size: 2.625em;
        margin-bottom: 24px;
    }
    
    p {
        font-size: 1.25em;
        color: hsla(0,0%,75.3%,.8);
        margin-bottom: 16px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-right: 0;
    }
    
    
`

const ImgContainer = styled.div`
    width: 50%;

    img {
        width: 100%;
        max-width: 750px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`


function Landing() {

    const moveBottom = () => {
        window.scrollTo(0, 923);
    }
    
    return (
        <>  
            <main>
                <Container>
                    <Content>
                        <CTA>
                            <CTALogoOne src="/images/cta-logo-one.svg" alt="hulu Disney ESPN logo" />
                            <SignUp href="/login">GET THE DISNEY BUNDLE</SignUp>
                            <p>Stream now. <a href="/">Terms apply.</a></p>
                            <CTALogoTwo src="/images/cta-logo-two.png" alt="hulu Disney ESPN logo" />
                            <SignForDisney href="/">Sign up for Disney+ only.</SignForDisney>
                            <Price>$7.99/month or $79.99/year.</Price>
                        </CTA>
                        <BgImg />
                    </Content>
                    <ArrowDown>
                        <svg data-name="Layer 1" onClick={moveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"></rect><path d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"></path></svg>
                    </ArrowDown>
                </Container>
                <Container id="bottom_section">
                    <CardContent>
                        <PictureContent>
                            <img src="/images/backgrounds/Raya_Side_Align_1440_en-US.jpeg" alt="" />
                        </PictureContent>
                        <PosterText>
                            <h2>Now streaming with <br /><span>Premier Access</span></h2>
                            <p>See Raya and the Last Dragon before it's available to all Disney+ subscribers on June 4. Watch as many times as you like with Premier Access for $29.99 and your Disney+ subscription.</p>
                            <a href="/login">Get Premier Access Now</a>
                        </PosterText>
                    </CardContent>
                </Container>
                <CaptionContainer>
                    <Wrapper>
                        <Meta>
                            <h2 className="heading">Virtual movie nights with GroupWatch</h2>
                            <div className="richtext">
                                <ul>
                                    <li>Watch together, even when apart</li>
                                    <li>Stream with up to 6 friends</li>
                                    <li>Pause, rewind, react together</li>
                                    <li>Easy setup and sharing</li>
                                </ul>
                            </div>
                        </Meta>
                    </Wrapper>
                    <BgImgSecond />
                </CaptionContainer>
                <Grid title="The new home for your favorites" paragraph="An unprecedented collection of the world's most beloved movies and TV series"
                    imgSrc={["/images/posters/moana-poster-4-2.png",
                            "/images/posters/Poster_InfinityWar_EN.jpeg",
                            "/images/posters/Disney_MLP_GridItem_TS4_AUNZ.jpeg",
                            "/images/posters/Disney_MLP_GridItem_SWRiseofSkywalker.jpeg",
                            "/images/posters/the-simpsons-poster-6@2x-1.png",
                            "/images/posters/Hamilton_Grid_Item_English.jpeg",
                            "/images/posters/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpeg",
                            "/images/posters/Poster_LifeBelowZero_EN.jpeg",
                            "/images/posters/Poster_ArtemisFowl_EN_v2.jpeg"
                ]} button="GET THE DISNEY BUNDLE"
                />
                <CaptionContainer>
                    <StreamWrapper>
                        <MetaStream>
                            <h2>Stream now or <br/><span>download and go</span></h2>
                            <p>
                            Stream on 4 devices at once or download your favorites to watch later. With dozens of titles in stunning 4K UHD, you can watch the way you always wished.
                            </p>
                        </MetaStream>
                        <ImgContainer>
                            <img src="/images/backgrounds/4DevicesLockup_English_1140.png" alt="4Device" />
                        </ImgContainer>
                    </StreamWrapper>
                </CaptionContainer>
                <Grid title="Stream exclusive Disney+ Originals" paragraph="New stories from our incredible family of studios"
                    imgSrc={["/images/posters/FAWS_(1)-3.png",
                            "/images/posters/Mighty_Ducks.png",
                            "/images/posters/Mandalorian_S2_(1)-1.png",
                            "/images/posters/Wandavision_EN_(2).png",
                            "/images/posters/The_Right_Stuff_EN.png",
                            "/images/posters/ForkyAsksAQuestion_en-US.jpeg",
                            "/images/posters/HSMTMTS_EN-1.png",
                            "/images/posters/Soul_EN_(1).png",
                            "/images/posters/SW_Clone_Wars.png"
                ]}
                />
            </main>
            
        </>
    )
}

export default Landing;
