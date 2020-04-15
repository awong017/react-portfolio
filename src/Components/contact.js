import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from  '../Styles/globalStyles';

const Contact = Styled.div`
    display: inline-block;
    background: #8db2ff;
    border-radius: 50px;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 400px;
    margin-left: ${(props) => props.theme.marginLeft};
    padding: 50px 50px;
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
                at <a href="mailto:adamwthedev@gmail.com" target="_blank">adamwthedev@gmail.com</a>. I would love to speak with you!
                </p>
            </Contact>
        </ThemeProvider>
    ) 
}

export default contact;