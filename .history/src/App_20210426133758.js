import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Blog, BlogNote } from './pages';
import './App.css';

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/note/:id" exact component={BlogNote} />
    </Switch>
    <div  className="App">
Bloq
    </div>
    </Router>
  )
}

export default App;
