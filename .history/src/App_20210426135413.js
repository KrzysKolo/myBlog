import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Blog, BlogNote } from './pages';
import { Header } from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/note/:id" exact component={BlogNote} />
      </Switch>
    </Router>
  )
}

export default App;
