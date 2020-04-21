import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Email from '../Lotties/email.jsx';
import Github from '../Lotties/github.jsx';
import Linkedin from '../Lotties/linkedin.jsx';

const Footer2 = Styled.div`
    display: none;
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
        display: block;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0px;
        padding-left: 21%;
    }

    @media screen and (max-width: ${(props) => props.theme.desktopHalf}) {
        padding-left: 15%;
    }

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
        padding-left: 7%;     
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        margin-top: 0px;
        width: initial;
        padding-left: 38px;     
    }

    @media screen and (max-width: ${(props) => props.theme.mobileSmall}) {
        padding-left: 20px;     
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMini}) {
        padding-left: 0px;     
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