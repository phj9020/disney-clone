import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BlockContainer = styled.div`
    padding: 24px 0px 48px 0px;
`

const Content = styled.div`
    padding: 24px 0px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));


    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px  -10px;
    cursor:pointer;
    overflow: hidden;
    position: relative;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0);
    border: 3px solid rgba(249,249,249,0.1);
    
    img{
        inset: 0px;
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:1;
        position: absolute;
        top: 0; 
        transition: opacity 0.5s ease-in-out;
        z-index: 1; 
    }
    
    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }   
`

function Block({title, obj}) {
    
    return (
        <BlockContainer>
            <h2>{title}</h2>
            <Content>
                {obj && obj.map((item, key) => 
                    <Wrap key={key}>
                        <Link to={`/detail/${item.id}`}>
                            <img src={item.cardImg} alt={item.title} />
                        </Link>
                    </Wrap>)
                }
            </Content>
        </BlockContainer>
    )
}

export default Block;