# React Animated Views

A higher order component to make mobile animated page views easier with react-router


It has a very small API overall.

Set up your routes:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Route } from 'react-router';

import App from './containers/App';
import PageOne from './containers/PageOne';
import PageTwo from './containers/PageTwo';


ReactDOM.render((
  <Router history={ hashHistory }>
    <Route component={ App }>
      <Route path="one" component={ PageOne } />
      <Route path="info" component={ PageTwo } />
      <Redirect from="/" to="/one" />
    </Route>
  </Router>
), document.getElementById('app'));
```

Wrap your view:

```
// Same principles for both PageOne and PageTwo...
import React from 'react';
import animateView from 'react-animated-views';

const PageOne = React.createClass({

  displayName: 'PageOne',

  render() {
    return (
      <div>
        <p>Page One</p>
        <button onClick={ goToPageTwo }>Go to Page Two</button>
      </div>
    );
  },
});

export default animateView(PageOne);
```
