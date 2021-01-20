import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/core/Header';
import Footer from './components/core/Footer';
import * as Pages from './components';
import './App.css';

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
          {/* Legal Pages */}
          <Route exact path="/terms-of-use" component={Pages.TermsOfUse} />
          <Route exact path="/privacy" component={Pages.PrivacyPolicy} />
          <Route exact path="/code-of-conduct" component={Pages.CodeOfConduct} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
