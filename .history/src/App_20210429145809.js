import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages';
import { Header, PostDetails, PostNew } from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/new" exact component={PostNew} />
          <Route path="/post/:id" exact component={PostDetails} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
