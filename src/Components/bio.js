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

const Bio = Styled.div`
    display: inline-block;
    background: #8db2ff;
    border-radius: 50px;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 125px;
    margin-left: ${(props) => props.theme.marginLeft};
    padding: 25px 50px;
    width: ${(props) => props.theme.width};

    .intro {
        margin-top: 50px;
    }

    .skills-section {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        margin-top: 50px;

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
                padding-top: 10px;
                text-align: center;
            }
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktopHalf}) {
        display: block;
        width: initial;
        margin-top: 75px;
        margin-left: 50px;
        margin-right: 50px;     
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        margin-top: 50px;
        margin-left: 25px;
        margin-right: 25px;
        padding: 25px 25px;
        
        h2 {
            font-size: 16px;
        }

        .intro {
            margin-top: 25px;
        }

        p {
            font-size: 12px;
        }

        .skills-section {
            margin-top: 25px;

            img {
                width: 24px;
            }
        }
    }

    @media screen and (max-width: ${(props) => props.theme.mobileSmall}) {
        .skills-heading {
            margin-left: 5px;
            margin-right: 5px;
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
                            <li><img src={React48}/></li>
                            <li><img src={Javascript48}/></li>
                            <li><img src={Jquery48}/></li>
                            <li><img src={Html48}/></li>
                            <li><img src={Css48}/></li>
                            <li><img src={Sass48}/></li>
                        </ul>
                    </div>
                    <div className="back-end-skills">
                        <p className="skills-heading">Back End Skills</p>
                        <ul>
                            <li><img src={Express48}/></li>
                            <li><img src={Postgres48}/></li>
                            <li><img src={Api48}/></li>
                            <li><img src={Mocha48}/></li>
                        </ul>
                    </div>
                    <div>
                        <p className="skills-heading">Additional Tools</p>
                        <ul>
                            <li><img src={Npm48}/></li>
                            <li><img src={Node48}/></li>
                            <li><img src={Github48}/></li>
                            <li><img src={Heroku48}/></li>
                            <li><img src={Zeit48}/></li>
                        </ul>
                    </div>
                </section>
            </Bio>
            <Footer2 />
        </ThemeProvider>
    )
}

export default bio;