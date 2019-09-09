import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/main.css'

import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={WelcomePage} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
