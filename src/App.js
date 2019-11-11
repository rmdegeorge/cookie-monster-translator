import React from 'react';
import {Switch,Route} from "react-router-dom";
import styled from 'styled-components'

import Navbar from './Navbar';
import Main from './Main';
import History from './History';
import About from './About';

const AppContainer = styled.div`
  display: flex;
  margin-top: 75px;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/history" component={History} />
          <Route exact path="/about" component={About} />
        </Switch>
    </AppContainer>
  );
}

export default App;
