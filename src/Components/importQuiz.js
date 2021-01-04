import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import ImportQuiz1 from '../Images/import-quiz1-500px.png';
import Html48 from '../Images/html-48.png';
import Css48 from '../Images/css-48.png';
import Javascript48 from '../Images/javascript-48.png';
import Jquery48 from '../Images/jquery-50.png';
import Github48 from '../Images/github-48.png';

const ImportQuiz = Styled.div`
    display: ${(props) => props.theme.display};
    background-color: ${(props) => props.theme.backgroundColor1};
    color: ${(props) => props.theme.bodyColor};
    margin-top: 148px;
    margin-left: ${(props) => props.theme.marginLeft};
    padding: 24px 48px;
    width: ${(props) => props.theme.width};
    border-radius: 50px;

    img {
        border-radius: 25px;
    }

    a { 
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopWindow}) {
        display: block;
        margin-top: 76px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        width: initial;
        margin-top: 48px;
        margin-left: 24px;
        margin-right: 24px;
        padding: 24px 24px;

        h1 {
            font-size: 18px;
        }

        h3 {
            font-size: 14px;
        }

        p {
            font-size: 12px;
        }

        .project-image {
            width: 280px;
            margin-left: 0px;
        }

        .icon {
            width: 24px;
        }
    }
`

const importQuiz = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <ImportQuiz>
                <h1>Import Car Quiz</h1>
                <p>
                    <a className="git-link" href="https://github.com/awong017/import-quiz-app" target="_blank" rel="noopener noreferrer">Repo</a>
                    <span> | <a className="git-link" href="https://awong017.github.io/import-quiz-app/" target="_blank" rel="noopener noreferrer">Live</a></span>
                </p>
                <div>
                    <img className="project-image" src={ImportQuiz1} alt="project image" />
                </div>
                <div>
                    <img src={Html48} className="icon" alt="html icon" />
                    <img src={Css48} className="icon" alt="css icon" />
                    <img src={Javascript48} className="icon" alt="javascript icon" />
                    <img src={Jquery48} className="icon" alt="jquery" />
                    <img src={Github48} className="icon" alt="github" />
                </div>
                <section>
                    <h3>About</h3>
                    <p>
                        This was my first project during my Engineering Flex program. The main
                        purpose of the project was to successfully implement aspects of JQuery in a basic quiz application. In the case of my 
                        quiz, the quiz tests the users knowledge on import automobiles. The user answers a series of 10 questions while being 
                        able to see the current score as well as keep track of what question her or she is on. Once completed, a summary of 
                        the user's score is rendered and the user has the ability to restart the quiz. See how well you know import cars!
                    </p>
                </section>
            </ImportQuiz>
        </ThemeProvider>
    )
}

export default importQuiz;