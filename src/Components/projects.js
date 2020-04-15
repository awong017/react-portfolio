import React from 'react';
import { Link } from 'react-router-dom';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import ImportQuiz1 from '../Images/import-quiz1-500px.png';
import LiveLine1 from '../Images/live-line1-500px.png';
import Xpense1 from '../Images/xpense1-500px.png';
import SmashUlt1 from '../Images/smash-ult1-500px.png';

const NewProject = Styled.div`
    display: inline-block;
    margin-top: 225px;
    margin-left: 35%;
    color: ${(props) => props.theme.bodyColor};
    width: 1000px;

    .projects {
        display: grid;
        grid-template-columns: repeat(2, 50%);

        .project-four {
            background: 
                linear-gradient(
                    rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.3)
                ),
            url(${SmashUlt1});
        }

        .project-three {
            background: 
                linear-gradient(
                    rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.3)
                ),
            url(${Xpense1});
        }

        .project-two {
            background-image: url(${LiveLine1});
        }

        .project-one {
            background-image: url(${ImportQuiz1});
        }

        div {
            text-align: center;
            background-size: cover;
            margin: 5px 5px;
            height: 250px;
            border-radius: 25px;

            &:hover {
                cursor: pointer;
                opacity: 0.3;
                transition: 0.3s;
                border: 4px solid white;
                ;

            }
            

            p {
                font-weight: bold;
                font-size: 30px;
                position: absolute;
                margin-top: 100px;
                margin-left: 125px;

                &:hover {
                    opacity: 1.0;
                }
            }
        }
    }
`

const newProject = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <NewProject>
                <div className="projects">
                    <Link to={"/smashUlt"}>
                        <div className="project-four" />
                    </Link>
                    <Link to={"/xpense"}>
                        <div className="project-three" />
                    </Link>
                    <Link to={"/liveLine"}>
                        <div className="project-two" />
                    </Link>
                    <Link to={"/importQuiz"}>
                        <div className="project-one" />
                    </Link>
                </div>
            </NewProject>
        </ThemeProvider>
    )
}

export default newProject;