import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Block from './Block';
import Viewers from './Viewers';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

    useEffect(() => {
        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trending = [];

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
            
    },[dispatch]);

    const recommendFromRedux = useSelector(selectRecommend);
    const newDisneyFromRedux = useSelector(selectNewDisney);
    const originlFromRedux = useSelector(selectOriginal);
    const trendingFromRedux = useSelector(selectTrending);

    return (
        <MainContainer>
            <HelmetProvider>
                <Helmet>
                    <title>Home | Disney Clone</title>
                </Helmet>
            </HelmetProvider>
            
            <MainBackground>
                <ImageSlider />
                <Viewers />
                <Block title="Recommend for you"  obj={recommendFromRedux && recommendFromRedux} />
                <Block title="New to Disney+" obj={newDisneyFromRedux && newDisneyFromRedux} />
                <Block title="Originals" obj={newDisneyFromRedux && originlFromRedux}  />
                <Block title="Trending" obj={trendingFromRedux && trendingFromRedux} />
            </MainBackground>
        </MainContainer>
    )
}

export default Home;
