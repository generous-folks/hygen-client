import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { InjectProvider } from './modules/inject/inject.context';

import { HomePage } from './pages/home.page';
import { InjectPage } from './pages/inject.page';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inject/:id">
          <InjectProvider>
            <InjectPage />
          </InjectProvider>
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
