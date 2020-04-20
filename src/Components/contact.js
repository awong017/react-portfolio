import React from 'react';
import Footer2 from './footer2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from  '../Styles/globalStyles';

const Contact = Styled.div`
    display: inline-block;
    background: #8db2ff;
    border-radius: 50px;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 400px;
    margin-left: ${(props) => props.theme.marginLeft};
    padding: 24px 48px;
    width: ${(props) => props.theme.width};

    a {
        text-decoration: none;
        font-weight: bold;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopWindow}) {
        display: block;
        margin-top: 148px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: ${(props) => props.theme.desktopHalf}) {
        width: initial;
        margin-top: 148px;
        margin-left: 48px;
        margin-right: 48px;
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        margin-top: 124px;
        margin-left: 24px;
        margin-right: 24px;
        padding: 24px 24px;

        p {
            font-size: 12px;
        }
    }
`

const contact = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Contact>
                <p>If you have any questions about my projects or wish to get in contact with me, you can contact me via email 
                at <a href="mailto:adamwthedev@gmail.com" target="_blank" rel="noopener noreferrer">adamwthedev@gmail.com</a>. I would love to speak with you!
                </p>
            </Contact>
            <Footer2 />
        </ThemeProvider>
    ) 
}

export default contact;