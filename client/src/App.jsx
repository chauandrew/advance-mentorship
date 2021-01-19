import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/core/Header';
import * as Pages from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route exact path="/campuses" component={Pages.Campuses} />
          <Route exact path="/mentors" component={Pages.Mentors} />
          <Route exact path="/mentors/:campusName" component={Pages.Mentors} />
          <Route exact path="/advisors/" component={Pages.Advisors} />
          <Route exact path="/advisors/:campusName" component={Pages.Advisors} />
          <Route exact path="/program" component={Pages.Program} />
          <Route exact path="/apply" component={Pages.Apply} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
