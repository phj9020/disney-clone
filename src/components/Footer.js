import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
    width: 100%;
    padding: 26px 8px;
`

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    img {
        width: 80px;
        object-fit: contain;
    }
`

const Policy = styled.p`
    text-align: center;
    margin-bottom: 6px;
    span {
        display: inline-block;
        font-size: 12px;
        color: hsla(0,0%,75.3%,.8);
        padding: 8px 12px;
    }
    `

const Right = styled.p`
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,75.3%,.8);
`

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>
                    <img src="images/logo.svg" alt="logo" />
                </Logo>
                <Policy>
                    <span>Subscriber Agreement</span>
                    <span>Privacy Policy</span>
                    <span>Your California Privacy Rights</span>
                    <span>Do Not Sell My Info</span>
                    <span>Children's Online Privacy Policy</span>
                    <span>Closed Captioning</span>
                    <span>Suppoerted Devices</span>
                    <span>Help</span>
                    <span>Gift Disney+</span>
                    <span>About Us</span>
                    <span>Disney+ Partner Program</span>
                    <span>Premier Access</span>
                    <span>The Disney Bundle</span>
                </Policy>
                <Right>
                    © Disney. All Rights Reserved.
                </Right>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
