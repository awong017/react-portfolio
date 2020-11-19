import React from 'react';
import Footer2 from './footer2';
import { Link } from 'react-router-dom';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import ImportQuizCover from '../Images/import-quiz-cover-light.png';
import LiveLineCover from '../Images/live-line-cover-light.png';
import XpenseCover from '../Images/xpense-cover-light.png';
import SmashUltCover from '../Images/smash-ult-cover-light.png';

const Projects = Styled.div`
    display: inline-block;
    margin-top: 225px;
    margin-left: 35%;
    color: ${(props) => props.theme.bodyColor};

    .projects {
        display: grid;
        grid-template-columns: repeat(2, 50%);

        a {
            text-decoration: none;
        }

        .wrapper {
            position: relative;

            &:hover .content {
                opacity: 1;
            }

            img {

                &:hover {
                    opacity: 0.3;
                    transition: 0.5s ease;
                }
            }

            .smash-ult {
                border-top-left-radius: 50px;
            }

            .xpense {
                border-top-right-radius: 50px;
            }

            .live-line {
                border-bottom-left-radius: 50px;
            }

            .import {
                border-bottom-right-radius: 50px;
            }

            .content {
                position: absolute;
                color: white;
                font-size: 24px;
                opacity 0;
                transition: 0.5s ease;
            }

            .content-one {
                bottom: 10px;
                right: 30px;
            }

            .content-two {
                bottom: 10px;
                left: 30px;
            }

            .content-three {
                top: 10px;
                right: 30px;
            }

            .content-four {
                top: 10px;
                left: 30px;
            }
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopWindow}) {
        display: block;
        width: 800px;
        margin-top: 150px;
        margin-left: auto;
        margin-right: auto;

        .wrapper {
            height: 200px;

            img {
                width: 400px;
            }
        } 
    }

    @media screen and (max-width: 800px) {
        width: initial;
        margin-top: 100px;

        .projects {
            display: block;

            .wrapper {
                position: initial;
                height: initial;
                width: 310px;
                margin-bottom: 25px;
                margin-left: auto;
                margin-right: auto;

                .content {
                    display: block;
                    position: initial;
                    text-align: center;
                    font-size: 18px;
                    opacity: 1;
                }

                .content-one {
                    bottom: initial;
                    right: initial;
                }
    
                .content-two {
                    bottom: initial;
                    left: initial;
                }
    
                .content-three {
                    top: initial;
                    right: initial;
                }
    
                .content-four {
                    top: initial;
                    left: initial;
                }
            }
            
            img {
                width: 310px;
                border-radius: 50px;

                &:hover {
                    opacity: 1;
                }
            }
        }

    }
`

const projects = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Projects>
                <div className="projects">
                    <Link to={"/smashUlt"}>
                        <div className="wrapper">
                            <img src={SmashUltCover} className="smash-ult" alt="smash ult cover" />
                            <div className="content content-four">Smash Ultimate Stats Tracker</div>
                        </div>
                    </Link>
                    <Link to={"/xpense"}>
                        <div className="wrapper">
                            <img src={XpenseCover} className="xpense" alt="xpense cover" />
                            <div className="content content-three">Xpense</div>
                        </div>
                    </Link>
                    <Link to={"/liveLine"}>
                        <div className="wrapper">
                            <img src={LiveLineCover} className="live-line" alt="live line cover" />
                            <div className="content content-two">Live Line</div>
                        </div>
                    </Link>
                    <Link to={"/importQuiz"}>
                        <div className="wrapper">
                            <img src={ImportQuizCover} className="import" alt="import quiz cover" />
                            <div className="content content-one">Import Quiz</div>
                        </div>
                    </Link>
                </div>
            </Projects>
            <Footer2 />
        </ThemeProvider>
    )
}

export default projects;