import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import SmashUlt1 from '../Images/smash-ult1-500px.png';
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

const SmashUlt = Styled.div`
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

    .node-icon {
        margin-left: 4px;
    }

    @media screen and (max-width: ${(props) => props.theme.desktopHalf}) {
        display: block;
        margin-top: 76px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: ${(props) => props.theme.mobileMedium}) {
        width: init48ial;
        margin-top: px;
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

const smashUlt = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <SmashUlt>
                <h1>Smash Bros Ultimate Stats Tracker</h1>
                <p>Work in Progress</p>
                <div>
                    <img className="project-image" src={SmashUlt1} alt="project image" />
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
                        Want to keep a record of your wins and losses for the very popular video game Super Smash Bros
                        Ultimate? This full-stack application will do just that! Users of this app will be able to keep
                        track of their records for every character matchup. They will also be able to see their matchup progress
                        overtime as well as see how they stack up against other users. Main purpose of build was to incorporate React
                        hooks along with styled components. Although currently under construction, this app will be deployed very
                        soon with Heroku and Zeit! 
                    </p>
                </section>
            </SmashUlt>
        </ThemeProvider>
    )
}

export default smashUlt;