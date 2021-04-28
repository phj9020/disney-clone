import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Block from './Block';
import Viewers from './Viewers';
import {useDispatch, useSelector} from 'react-redux';
import {dbService} from '../fbase';
import {setMovies, selectRecommend, selectNewDisney, selectOriginal, selectTrending} from '../features/movie/movieSlice';

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
    overflow:hidden;
`

function Home() {
    const dispatch = useDispatch();

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
    
        dbService.collection("movies").onSnapshot((snapshot) => {
        
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
            
                    case "new":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;
            
                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
            
                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                        
                    default:
                        break;
                }
                return console.log("data dispatched to redux")
            });
            
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
            
        });
    }, []);

    const recommendFromRedux = useSelector(selectRecommend);
    const newDisneyFromRedux = useSelector(selectNewDisney);
    const originlFromRedux = useSelector(selectOriginal);
    const trendingFromRedux = useSelector(selectTrending);


    return (
        <MainContainer>
            <MainBackground>
                <ImageSlider />
                <Viewers />
                <Block title="Recommend for you" imgSrc={recommendFromRedux && recommendFromRedux.map(item => item.cardImg)} />
                <Block title="New to Disney+" imgSrc={newDisneyFromRedux && newDisneyFromRedux.map(item => item.cardImg)} />
                <Block title="Originals" imgSrc={originlFromRedux && originlFromRedux.map(item => item.cardImg)} />
                <Block title="Trending" imgSrc={trendingFromRedux && trendingFromRedux.map(item => item.cardImg)} />
            </MainBackground>
        </MainContainer>
    )
}

export default Home;
