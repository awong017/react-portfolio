import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Email from '../Lotties/email.jsx';
import Github from '../Lotties/github.jsx';
import Linkedin from '../Lotties/linkedin.jsx';

const Footer2 = Styled.div`
    display: none;

    ul {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        list-style: none;
        padding-left: 0px;

        .linkedin-icon {
            padding-top: 49px;
            
        }

        .github-icon {
            padding-top: 63px;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopWindow}) {
        display: block;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        width: 90%;
    }
`

const footer2 = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Footer2>
                <ul>
                    <li className="linkedin-icon">
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/adam-wong-785279122/" target="_blank" rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                        </div>
                    </li>
                    <li className="github-icon">
                        <div className="icon">
                            <a href="https://github.com/awong017?tab=stars" target="_blank" rel="noopener noreferrer">
                                <Github />
                            </a>
                        </div>
                    </li>
                    <li className="email-icon">
                        <div className="icon">
                            <a href="mailto:adamwthedev@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Email />
                            </a>
                        </div>
                    </li>
                </ul>
            </Footer2>
        </ThemeProvider>
    )
}

export default footer2;