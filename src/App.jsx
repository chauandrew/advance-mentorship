import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/common/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* for unknown paths, reroute the user to the home page */}
          <Route exact path="/*" component={() => {
            window.location.href = "/"
          }} />      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
