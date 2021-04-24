import React from 'react';
import styled from 'styled-components';

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

const TableContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const TableContent = styled.div`
    padding: 80px;

    @media screen and (max-width: 768px) {
        padding: 50px 35px;

    }
`


const PosterCollection = styled.div`
    width: 100%;
    
    h2 {
        margin-bottom: 24px;
        font-size: 2.625em;
    }
    p {
        margin-bottom: 24px;
        font-size: 1.125em;
        color: gray;
        font-weight: 600;
    }
`

const UlContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding-bottom: 80px;

    ul {
        width: 100%;
        list-style-type: none;

        li {
            width:33%;
            float:left;
            border: 1px solid transparent;
            border-radius: 24px;
            box-sizing: border-box;
            overflow: hidden;

            img {
                padding: 12px;
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        
        ul {
            li {
                width: 50%;
            }
        }
}

`


function Grid({title, paragraph, imgSrc, button}) {

    return (
        <>
            <TableContainer>
                <TableContent>
                    <PosterCollection>
                        <h2 className="heading">{title}</h2>
                        <p className="sub-heading secondary xlarge">{paragraph}</p>
                    </PosterCollection>
                    <UlContainer>
                        <ul>
                            {imgSrc.map((item, index) => <li key={index}><img src={item} alt={item.split("/")[3]} /></li>)}
                        </ul>
                    </UlContainer>
                </TableContent>
            </TableContainer>
            {button && 
                <TableContainer>
                    <TableContent>
                        <SignUp href="/" style={{padding: "20px 50px"}}>{button}</SignUp>
                    </TableContent>
                </TableContainer>
            }
            
        </>
    )
}

export default Grid
