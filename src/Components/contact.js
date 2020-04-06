import React from 'react';
import Footer from './footer';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from  '../Styles/globalStyles';

const Contact = Styled.div`
    display: inline-block;
    text-align: center;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 425px;
    margin-left: ${(props) => props.theme.marginLeft};
    width: ${(props) => props.theme.width};

    a {
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktop}) {
        display: block;
        margin-top: 150px;
        margin-left: 0px;
        padding-left: 50px;
        padding-right: 50px;
        width: initial;
    }

    @media screen and (max-width: ${(props) => props.theme.mobile}) {
        padding-left: 25px;
        padding-right: 25px;

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
                at <a href="mailto:adamwthedev@gmail.com">AdamWTheDev@gmail.com</a>. I would love to speak with you.
                </p>
                <Footer />
            </Contact>
        </ThemeProvider>
    ) 
}

export default contact;