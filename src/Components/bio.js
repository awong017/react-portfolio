import React from 'react';
import Footer2 from './footer2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from  '../Styles/globalStyles';
import Html48 from '../Images/html-48.png';
import Css48 from '../Images/css-48.png';
import Sass48 from '../Images/sass-48.png';
import Javascript48 from '../Images/javascript-48.png';
import Jquery48 from '../Images/jquery-50.png';
import React48 from '../Images/react-48.png';
import Node48 from '../Images/node-48.png';
import Npm48 from '../Images/npm-48.png';
import Express48 from '../Images/express-48.png';
import Postgres48 from '../Images/postgres-48.png';
import Api48 from '../Images/api-48.png';
import Mocha48 from '../Images/mocha-48.png';
import Github48 from '../Images/github-48.png';
import Heroku48 from '../Images/heroku-48.png';
import Zeit48 from '../Images/zeit-48.png';
import Gatsby48 from '../Images/gatsby-48.png';
import Graphql48 from '../Images/graphql-48.png';
import Strapi48 from '../Images/strapi-48.png';

const Bio = Styled.div`
    display: inline-block;
    background: ${(props) => props.theme.backgroundColor1};
    border-radius: 50px;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 124px;
    margin-left: ${(props) => props.theme.marginLeft};
    padding: 24px 48px;
    width: ${(props) => props.theme.width};

    .intro {
        margin-top: 48px;
    }

    .skills-section {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        margin-top: 48px;

        p {
            text-align: center;
            font-weight: bold;
        }

        .back-end-skills {
            border-left: 2px solid white;
            border-right: 2px solid white;
        }

        ul {
            list-style: none;
            padding-left: 0px;
            display: grid;
            grid-template-columns: repeat(3, 33.33%);

            li {
                padding-top: 12px;
                text-align: center;
            }
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopWindow}) {
        display: block;
        margin-top: 76px;
        margin-left: auto;
        margin-right: auto;     
    }

    @media screen and (max-width: ${(props) => props.theme.desktopHalf}) {
        width: initial;
        margin-top: 76px;
        margin-left: 48px;
        margin-right: 48px;     
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        margin-top: 48px;
        margin-left: 24px;
        margin-right: 24px;
        padding: 24px 24px;
        
        h2 {
            font-size: 16px;
        }

        .intro {
            margin-top: 24px;
        }

        p {
            font-size: 12px;
        }

        .skills-section {
            margin-top: 24px;

            img {
                width: 24px;
            }
        }
    }

    @media screen and (max-width: ${(props) => props.theme.mobileSmall}) {
        .skills-heading {
            margin-left: 4px;
            margin-right: 4px;
        }
    }
`

const bio = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Bio>
                <h2>Hi and welcome to my portfolio!</h2>
                <p className="intro">
                    I was working as an Industrial Engineering Technician for a furniture manufacturer when I found my passion for coding. 
                    The task that I enjoyed the most was basic C# programming in an ERP software and debugging what were known as product 
                    configurators. After talking to many of my friends who work as web developers, they recommended that I look into that
                    career path, as they thought it might be a good fit. 
                </p>
                <p className="body">
                    From then on I decided to make a career change and enrolled in the Engineering Flex Web Development program at Thinkful. 
                    Thinkful has provided me with the tools and concepts needed to be a successful full-stack web developer. I grew very fond 
                    of full-stack web development due to the creativity involved and ability to add your own personal touch to an application 
                    on the front-end, while building your own API on the back-end. Completing multiple projects has shown me the joy and 
                    satisfaction of seeing the creation of a website from a mere wireframe to a full-blown live web application. 
                </p>
                <p className="interests">
                    When I'm not hacking away on my keyboard, one of my favorite hobbies are automotive modification
                    and maintenance. There's nothing like fine tuning the suspension of a car and going out for a spirited drive. 
                    I am also very passionate about sight seeing and world traveling. Being immersed in a variety of 
                    cultures is truly a unique and satisfying experience.
                </p>
                <section className="skills-section">
                    <div>
                        <p className="skills-heading">Front End Skills</p>
                        <ul>
                            <li><img src={React48} alt="react icon" /></li>
                            <li><img src={Gatsby48} alt="gatsby icon" /></li>
                            <li><img src={Javascript48} alt="javscript icon" /></li>
                            <li><img src={Jquery48} alt="jquery icon" /></li>
                            <li><img src={Html48} alt="html icon" /></li>
                            <li><img src={Css48} alt="css icon" /></li>
                            <li><img src={Sass48} alt="sass icon" /></li>
                        </ul>
                    </div>
                    <div className="back-end-skills">
                        <p className="skills-heading">Back End Skills</p>
                        <ul>
                            <li><img src={Express48} alt="express icon" /></li>
                            <li><img src={Postgres48} alt="postgres icon" /></li>
                            <li><img src={Graphql48} alt="graphql icon" /></li>
                            <li><img src={Api48} alt="api icon" /></li>
                            <li><img src={Mocha48} alt="mocha icon" /></li>
                        </ul>
                    </div>
                    <div>
                        <p className="skills-heading">Additional Tools</p>
                        <ul>
                            <li><img src={Npm48} alt="npm icon" /></li>
                            <li><img src={Node48} alt="node icon" /></li>
                            <li><img src={Strapi48} alt="strapi icon" /></li>
                            <li><img src={Github48} alt="github icon" /></li>
                            <li><img src={Heroku48} alt="heroku icon" /></li>
                            <li><img src={Zeit48} alt="zeit icon" /></li>
                        </ul>
                    </div>
                </section>
            </Bio>
            <Footer2 />
        </ThemeProvider>
    )
}

export default bio;