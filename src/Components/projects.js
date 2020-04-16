import React from 'react';
import { Link } from 'react-router-dom';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import ImportQuizCover from '../Images/import-quiz-cover-light.png';
import LiveLineCover from '../Images/live-line-cover-light.png';
import XpenseCover from '../Images/xpense-cover-light.png';
import SmashUltCover from '../Images/smash-ult-cover-light.png';

const NewProject = Styled.div`
    display: inline-block;
    margin-top: 225px;
    margin-left: 35%;
    color: ${(props) => props.theme.bodyColor};
    width: 1000px;

    .projects {
        display: grid;
        grid-template-columns: repeat(2, 50%);

        .wrapper {
            position: relative;
            width: 500px;
            height: 250px;

            &:hover .content {
                opacity: 1;
            }

            img {
                border-radius: 50px;

                &:hover {
                    opacity: 0.3;
                    transition: 0.5s ease;
                }
            }

            .content {
                position: absolute;
                bottom: 10px;
                right: 30px;
                color: white;
                font-size: 28px;
                opacity 0;
                transition: 0.5s ease;
            }
        }

        .project-four {
            background-image: url(${SmashUltCover});
        }

        .project-three {
            background-image: url(${XpenseCover});
        }

        .project-two {
            background-image: url(${LiveLineCover});
        }

        .project-one {
            background-image: url(${ImportQuizCover});
        }
    }
`

const newProject = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <NewProject>
                <div className="projects">
                    <Link to={"/smashUlt"}>
                        <div className="wrapper">
                            <img src={SmashUltCover} />
                            <div className="content">Smash Ultimate Stats Tracker</div>
                        </div>
                    </Link>
                    <Link to={"/xpense"}>
                        <div className="wrapper">
                            <img src={XpenseCover} />
                            <div className="content">Xpense</div>
                        </div>
                    </Link>
                    <Link to={"/liveLine"}>
                        <div className="wrapper">
                            <img src={LiveLineCover} />
                            <div className="content">Live Line</div>
                        </div>
                    </Link>
                    <Link to={"/importQuiz"}>
                        <div className="wrapper">
                            <img src={ImportQuizCover} />
                            <div className="content">Import Quiz</div>
                        </div>
                    </Link>
                </div>
            </NewProject>
        </ThemeProvider>
    )
}

export default newProject;