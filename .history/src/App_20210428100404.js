import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Blog, BlogNote } from './pages';
import { Header } from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" exact component={BlogNote} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
