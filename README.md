# React Animated Views

> A higher order component to make mobile animated page views easier with react-router


It has a very small API overall. It comes down to setting up your routes, wrapping your components in the higher-order component, and using the `push()` and `pop()` methods passed in to `this.props` instead of the usual react-router versions.

#### Basic example

See full example in the examples folder.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Redirect, Router, Route } from 'react-router';
import TransitionGroup from 'react-addons-transition-group';

// bring in the higher order component from react-animated-views
import animateView from 'react-animated-views';

// Top level App component for transitioning the page components 
const App = React.createClass({
  displayName: 'App',

  render() {
    const {                                          
      location: { pathname: key, action: direction },
    } = this.props;                                  

    const props = {                      
      key,                               
      direction: direction.toLowerCase(),
    };                                   

    return (
      <TransitionGroup>
        { React.cloneElement(this.props.children || <div />, props) }
      </TransitionGroup>
    );
  },
});


// Page One component
const PageOne = React.createClass({
  displayName: 'PageOne',

  propTypes: {
    push: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  goToPageTwo() {
    const { push } = this.props;
    push('/two', 'slideLeft');
  },

  render() {
    const { style } = this.props;

    return (
      <div className="pageone" style={ style }>
        <p>Page One</p>
        <a
          className="button-next-page"
          onClick={ this.goToPageTwo }
        >
          Slide Left to page two &raquo;
        </a>
      </div>
    );
  },
});

// Now, wrap PageOne in the animateView higher order component
const AnimatedPageOne = animateView(PageOne);


// Page Two component
const PageTwo = React.createClass({
  displayName: 'PageTwo',

  propTypes: {
    push: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  goBack() {
    const { pop } = this.props;
    pop('slideLeft');
  },

  render() {
    const { style } = this.props;

    return (
      <div className="pagetwo" style={ style }>
        <p>Page Two</p>
        <a
          className="button-back"
          onClick={ this.goBack }
        >
          &laquo; Go back to to page one
        </a>
      </div>
    );
  },
});

// Now, wrap PageTwo in the animateView higher order component
const AnimatedPageTwo = animateView(PageTwo);


// Finally we set up our routes
ReactDOM.render((
  <Router history={ hashHistory }>
    <Route component={ App }>
      <Route path="one" component={ AnimatedPageOne } />
      <Route path="two" component={ AnimatedPageTwo } />
      <Redirect from="/" to="/one" />
    </Route>
  </Router>
), document.getElementById('app'));
```
