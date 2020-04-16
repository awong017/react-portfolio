import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Xpense1 from '../Images/xpense1-500px.png';
import Html48 from '../Images/html-48.png';
import Javascript48 from '../Images/javascript-48.png';
import React48 from '../Images/react-48.png';
import Node48 from '../Images/node-48.png';
import Npm48 from '../Images/npm-48.png';
import Express48 from '../Images/express-48.png';
import Postgres48 from '../Images/postgres-48.png';
import Github48 from '../Images/github-48.png';
import Heroku48 from '../Images/heroku-48.png';
import Zeit48 from '../Images/zeit-48.png';

const Xpense = Styled.div`
    display: ${(props) => props.theme.display};
    background-color: ${(props) => props.theme.backgroundColor1};
    color: ${(props) => props.theme.bodyColor};
    margin-top: 150px;
    margin-left: ${(props) => props.theme.marginLeft};
    padding: 25px 50px;
    width: ${(props) => props.theme.width};
    border-radius: 50px;

    img {
        border-radius: 25px;
    }

    .node-icon {
        margin-left: 5px;
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
        margin-top: 75px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        width: initial;
        margin-top: 50px;
        margin-left: 25px;
        margin-right: 25px;
        padding: 25px 25px;

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

const xpense = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Xpense>
                <h1>Xpense</h1>
                <p>
                    <a href="https://github.com/awong017/xpense" target="_blank" rel="noopener noreferrer">Repo</a>
                    <span> | <a href="https://xpense-app.awong017.now.sh" target="_blank" rel="noopener noreferrer">Live</a></span>
                    <span> | <a href="https://github.com/awong017/xpense-api" target="_blank" rel="noopener noreferrer">API</a></span>
                </p>
                <div>
                    <img className="project-image" src={Xpense1} alt="project image" />
                </div>
                <div>
                    <img src={React48} className="icon" alt="react icon" />       
                    <img src={Javascript48} className="icon" alt="javascript icon" />
                    <img src={Html48} className="icon" alt="html icon" />
                    <img src={Express48} className="icon" alt="express icon" />
                    <img src={Postgres48} className="icon" alt="postgres icon" />
                    <img src={Npm48} className="icon" alt="npm icon" />
                    <img src={Node48} className="icon node-icon" alt="node icon" />
                    <img src={Github48} className="icon" alt="github icon" />
                    <img src={Heroku48} className="icon" alt="heroku icon" />
                    <img src={Zeit48} className="icon" alt="zeit icon" />     
                </div>
                <section>
                    <h3>About</h3>
                    <p>
                        Xpense was the first full-stack project that I completed for my Engineering Flex program.
                        The ultimate goal was to use both front end and back end aspects of web development. With using React on the front end, express
                        for the server, and postgreSQL to manage a relational database, this was a true full-stack project. Xpense allows the user to 
                        manage his or her daily expenses. With an expense summary view with many filters, users are able stay within their specified budget
                        and are able to keep track of their purchases with ease. Effortlessly sign up and see for yourself!
                    </p>
                </section>
            </Xpense>
        </ThemeProvider>
    )
}

export default xpense;