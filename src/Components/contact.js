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
    padding: 25px 50px;
    width: ${(props) => props.theme.width};

    a {
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopHalf}) {
        display: block;
        width: initial;
        margin-top: 150px;
        margin-left: 50px;
        margin-right: 50px;
        width: initial;
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        margin-top: 125px;
        margin-left: 25px;
        margin-right: 25px;
        padding: 25px 25px;

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
                at <a href="mailto:adamwthedev@gmail.com" target="_blank">adamwthedev@gmail.com</a>. I would love to speak with you!
                </p>
            </Contact>
            <Footer2 />
        </ThemeProvider>
    ) 
}

export default contact;