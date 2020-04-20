import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Email from '../Lotties/email.jsx';
import Github from '../Lotties/github.jsx';
import Linkedin from '../Lotties/linkedin.jsx';

const Footer1 = Styled.div`
    text-align: center;
    margin-top: 0px;

    ul {
        display: flex;
        list-style: none;
        padding-left: 0px;
        margin-left: 25px;

        .linkedin-icon {
            padding-top: 49px;
            margin-right: 40px;
        }

        .github-icon {
            padding-top: 63px;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopWindow}) {
        display: none;
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        margin-top: 0px;
    }
`

const footer1 = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Footer1>
                <ul>
                    <li className="linkedin-icon">
                        <a href="https://www.linkedin.com/in/adam-wong-785279122/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </a>
                    </li>
                    <li className="github-icon">
                        <a href="https://github.com/awong017?tab=stars" target="_blank" rel="noopener noreferrer">
                            <Github />
                        </a>
                    </li>
                    <li className="email-icon">
                        <a href="mailto:adamwthedev@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Email />
                        </a>
                    </li>
                </ul>
            </Footer1>
        </ThemeProvider>
    )
}

export default footer1;