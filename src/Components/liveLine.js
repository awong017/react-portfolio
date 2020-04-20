import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import LiveLine1 from '../Images/live-line1-500px.png';
import Html48 from '../Images/html-48.png';
import Css48 from '../Images/css-48.png';
import Javascript48 from '../Images/javascript-48.png';
import Jquery48 from '../Images/jquery-50.png';
import Github48 from '../Images/github-48.png';

const LiveLine = Styled.div`
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

    @media screen and (max-width: ${(props) => props.theme.desktopHalf}) {
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

const liveLine = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <LiveLine>
            <h1>Live Line</h1>
                <p>
                    <a className="git-link" href="https://github.com/awong017/Live-Line" target="_blank" rel="noopener noreferrer">Repo</a>
                    <span> | <a className="git-link" href="https://awong017.github.io/Live-Line/" target="_blank" rel="noopener noreferrer">Live</a></span>
                </p>
                <div>
                    <img className="project-image" src={LiveLine1} alt="project image" />
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
                        This was my second project during my Engineering Flex program. The main
                        purpose of the project was to work with APIs, extract data from those APIs, and format the data
                        in a aesthetic manner through the creation of a music application. This application allows users to search their
                        favorite music artists, which gives the user the ability to read artist's bios, listen to their top music tracks,
                        and see artists upcoming shows and events. Give it a try! Who knows, you just might end up buying tickets to a show
                        by your favorite artist!
                    </p>
                </section>
            </LiveLine>
        </ThemeProvider>
    )
}

export default liveLine;