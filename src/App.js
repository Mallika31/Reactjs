import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './components/home/home';
import Prop1 from './components/props/prop1';
import Lists from './components/lists/lists';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul className="navigation">
            <li><Link to="/">State</Link></li>
            <li><Link to="/properties">Props</Link></li>
            <li><Link to="/lists">Lists</Link></li>

          </ul>


          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/properties" component={Prop1} />
          <Route exact path="/lists" component={Lists} />

        </div>
      </Router>

    </div>
  );
}

export default App;
