import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from  '../Styles/globalStyles';

const Nav = Styled.div`
    position: fixed;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 300px;
    padding-left: 50px;
    width: 20%;

    .bio-ul {
        list-style: none;
        padding-top: 25px;
        padding-left: 0px;
        border-top: 2px solid white;
        border-bottom: 2px solid white;

        li {
            margin-bottom: 25px;

            a {
                text-decoration: none;
                color: white;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media screen and (max-width: ${(props) => props.theme.desktop}) {
        display: block;
        position: static;
        text-align: center;
        margin-top: 0px;
        padding-left: 0px;
        width: initial;

        .bio-ul {
            display: flex;
            justify-content: space-around;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;

            li {
                margin-bottom: 0px;
            }
        }
    }
    @media screen and (max-width: ${(props) => props.theme.mobile}) {
        h1 {
            font-size: 20px;
        }

        .bio-ul {
            padding-top: 5px;
            padding-bottom: 5px;

            li {
                font-size: 12px;
            }
        }
    }
`

const nav = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Nav>
                <h1>Adam Wong</h1>
                <ul className="bio-ul">
                    <li>
                        <Link to={"/"}>
                            Bio
                        </Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <Footer />
            </Nav>
        </ThemeProvider>
    )
}

export default nav;