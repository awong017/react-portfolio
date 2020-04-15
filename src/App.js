import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './Components/nav';
import Bio from './Components/bio';
import Projects from './Components/projects';
import Contact from './Components/contact';
import ImportQuiz from './Components/importQuiz';
import LiveLine from './Components/liveLine';
import Xpense from './Components/xpense';
import SmashUlt from './Components/smashUlt';
import Styled from 'styled-components';
import './App.css';

const App = Styled.div`
`

const renderRoutes = () => {
  return (
    <>
      <Route path="/" component={Nav} /> 
      <Route exact path="/" component={Bio} />
      <Route path="/importQuiz" component={ImportQuiz} />
      <Route path="/liveLine" component={LiveLine} />
      <Route path="/xpense" component={Xpense} />
      <Route path="/smashUlt" component={SmashUlt} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </>
  )
}

const app = () => {
  return (
    <App>
      {renderRoutes()}
    </App>
  )
}

export default withRouter(app);