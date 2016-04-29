import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Redirect, Router, Route } from 'react-router';

import App from './components/App';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route component={ App }>
      <Route path="one" component={ PageOne } />
      <Route path="two" component={ PageTwo } />
      <Route path="three" component={ PageThree } />
      <Redirect from="/" to="/one" />
    </Route>
  </Router>
), document.getElementById('app'));
