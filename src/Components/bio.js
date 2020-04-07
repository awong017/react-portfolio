import React from 'react';
import Footer from './footer';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from  '../Styles/globalStyles';

const Bio = Styled.div`
    display: inline-block;
    text-align: center;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 275px;
    margin-left: ${(props) => props.theme.marginLeft};
    width: ${(props) => props.theme.width};

    .intro {
        margin-top: 50px;
    }

    .front-end-skills {
        margin-top: 50px;
    }

    @media screen and (max-width: ${(props) => props.theme.desktop}) {
        display: block;
        margin-top: 125px;
        margin-left: 0px;
        padding-left: 50px;
        padding-right: 50px;
        width: initial;
    }

    @media screen and (max-width: ${(props) => props.theme.mobile}) {
        margin-top: 50px;
        padding-left: 25px;
        padding-right: 25px;
        
        h2 {
            font-size: 16px;
        }

        p {
            font-size: 12px;
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
                <p className="front-end-skills">Front End Skills: React, JavaScript ES6, jQuery, HTML5, CSS3, SASS</p>
                <p className="back-end-skills">Back End Skills: Express, PostgreSQL, RESTful APIs, TDD with Mocha</p>
                <Footer />
            </Bio>
        </ThemeProvider>
    )
}

export default bio;