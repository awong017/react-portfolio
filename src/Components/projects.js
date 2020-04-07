import React from 'react';
import Footer from './footer';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from  '../Styles/globalStyles';
import XpenseApp from '../Images/xpense-home-screenshot-20.png';
import XpenseAPI from '../Images/xpense-api-screenshot-20.png';
import LiveLine from '../Images//live-line-screenshot-20.png';
import ImportQuiz from '../Images//import-car-quiz-screenshot-20.png';
import Html48 from '../Images/html-48.png';
import Css48 from '../Images/css-48.png';
import Javascript48 from '../Images/javascript-48.png';
import Jquery48 from '../Images/jquery-50.png';
import React48 from '../Images/react-48.png';
import Node48 from '../Images/node-48.png';
import Npm48 from '../Images/npm-48.png';
import Postgres48 from '../Images/postgres-48.png';

const Projects = Styled.div`
    display: inline-block;
    text-align: center;
    color: ${(props) => props.theme.bodyColor};
    margin-left: ${(props) => props.theme.marginLeft};
    width: ${(props) => props.theme.width};

    .latest-project{
        margin-top: 100px;
    } 

    .project {
        margin-top: 100px;
    }

    .project-three-images {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .node-icon {
        margin-left: 10px;
    }

    .postgres-icon {
        margin-left: 5px;
    }

    a {
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktop}) {
        display: block;
        margin-left: 0px;
        padding-left: 50px;
        padding-right: 50px;
        width: initial;
    }

    @media screen and (max-width: ${(props) => props.theme.mobile}) {
        padding-left: 0px;
        padding-right: 0px;
        
        h2 {
            font-size: 16px;
        }

        h3 {
            font-size: 14px;
        }

        p {
            padding-left: 25px;
            padding-right: 25px;
            font-size: 12px;
        }

        .latest-project {
            margin-top: 50px;
        }

        .project {
            margin-top: 50px;
        }

        .project-three-images {
            display: block;
        }

        .icon {
            width: 25px;
        }

        .node-icon {
            width: 25px;
        }

        .postgres-icon {
            width: 25px;
        }
    }
`

const projects = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Projects>
                <div className="latest-project">
                    <h2>Xpense</h2>
                    <div className="project-three-images">
                        <div className="project-three-image-1">
                            <h3>App</h3>
                            <img src={XpenseApp} alt="Xpense App" className="image" />
                            <p><a className="git-link" href="https://github.com/awong017/xpense">Repo</a>
                            <span> | <a className="git-link" href="https://xpense-app.awong017.now.sh/">Live</a></span></p>
                            <img src={React48} className="icon" alt="react icon" />
                            <img src={Javascript48} className="icon" alt="javascript icon" />
                            <img src={Html48} className="icon" alt="html icon" />
                            <img src={Css48} className="icon" alt="css icon" />
                            <img src={Npm48} className="icon" alt="npm icon" />
                            <img src={Node48} className="node-icon" alt="node icon" />
                        </div>
                        <div className="project-three-image-2">
                            <h3>Api</h3>
                            <img src={XpenseAPI} alt="Xpense Api" className="image" />
                            <p><a className="git-link-api" href="https://github.com/awong017/xpense-api">Repo</a></p>
                            <img src={Npm48} className="icon" alt="npm icon" />
                            <img src={Node48} className="node-icon" alt="node icon" />
                            <img src={Postgres48} className="postgres-icon" alt="postgres-icon" />
                        </div>
                    </div>
                    <p className="project-description">
                        Xpense was the first full-stack project that I completed for my Engineering Flex program.
                        The ultimate goal was to use both front end and back end aspects of web development. With using React on the front end, express
                        for the server, and postgreSQL to manage a relational database, this was a true full-stack project. Xpense allows the user to 
                        manage his or her daily expenses. With an expense summary view with many filters, users are able stay within their specified budget
                        and are able to keep track of their purchases with ease. Effortlessly sign up and see for yourself!
                    </p>
                </div>
                <div className="project">
                    <h2>Live Line</h2>
                    <img src={LiveLine} alt="Live Line App" className="image" />
                    <p><a className="git-link" href="https://github.com/awong017/Live-Line">Repo</a>
                    <span> | <a className="git-link" href="https://awong017.github.io/Live-Line/">Live</a></span></p>
                    <img src={Html48} className="icon" alt="html icon" />
                    <img src={Css48} className="icon" alt="css icon" />
                    <img src={Javascript48} className="icon" alt="javascript icon" />
                    <img src={Jquery48} className="icon" alt="jquery icon" />
                    <p className="project-description">
                        This was my second project during my Engineering Flex program. The main
                        purpose of the project was to practice working with APIs, extracting data from those APIs, and formatting the data
                        in a aesthetic manner through the creation of a music application. This application allows users to search their
                        favorite music artists, which gives the user the ability to read artist's bios, listen to their top music tracks,
                        and see artists upcoming shows and events. Give it a try! Who knows, you just might end up buying tickets to a show
                        by your favorite artist!
                    </p>
                </div>
                <div className="project">
                    <h2>Import Car Quiz</h2>
                    <img src={ImportQuiz} alt="Quiz App" className="image" />
                    <p><a className="git-link" href="https://github.com/awong017/import-quiz-app">Repo</a>
                    <span> | <a className="git-link" href="https://awong017.github.io/import-quiz-app/">Live</a></span></p>
                    <img src={Html48} className="icon" alt="html icon" />
                    <img src={Css48} className="icon" alt="css icon" />
                    <img src={Javascript48} className="icon" alt="javascript icon" />
                    <img src={Jquery48} className="icon" alt="jquery" />
                    <p className="project-description">
                        This was my first project during my Engineering Flex program. The main
                        purpose of the project was to successfully implement aspects of JQuery in a basic quiz application. In the case of my 
                        quiz, the quiz tests the users knowledge on import automobiles. The user answers a series of 10 questions while being 
                        able to see the current score as well as keep track of what question her or she is on. Once completed, a summary of 
                        the user's score is rendered and the user has the ability to restart the quiz. See how well you know import cars!
                    </p>
                </div>
                <Footer />
            </Projects>
        </ThemeProvider>
    )
}

export default projects;