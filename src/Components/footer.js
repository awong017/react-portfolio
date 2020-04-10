import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Email from '../Lotties/email.jsx';
import Github from '../Lotties/github.jsx';
import Linkedin from '../Lotties/linkedin.jsx';

const Footer = Styled.div`
    text-align: center;
    margin-top: 0px;

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding-left: 0px;
        margin-left: 45px;

        .linkedin-icon {
            padding-top: 49px;
            margin-right: 40px;
        }

        .github-icon {
            padding-top: 63px;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.mobile}) {
        margin-top: 0px;
    }
`

const footer = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Footer>
                <ul>
                    <li className="linkedin-icon">
                        <a href="https://www.linkedin.com/in/adam-wong-785279122/">
                            <Linkedin />
                        </a>
                    </li>
                    <li className="github-icon">
                        <a href="https://github.com/awong017?tab=stars">
                            <Github />
                        </a>
                    </li>
                    <li className="email-icon">
                        <a href="mailto:adamwthedev@gmail.com">
                            <Email />
                        </a>
                    </li>
                </ul>
            </Footer>
        </ThemeProvider>
    )
}

export default footer;