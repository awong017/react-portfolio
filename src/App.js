import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './Components/nav';
import Bio from './Components/bio';
import Projects from './Components/projects';
import Contact from './Components/contact';
import Styled from 'styled-components';
import './App.css';

const App = Styled.div`
`

const renderRoutes = () => {
  return (
    <>
      <Route path="/" component={Nav} /> 
      <Route exact path="/" component={Bio} />
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