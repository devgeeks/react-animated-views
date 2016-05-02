import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

export default React.createClass({

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
      <TransitionGroup className="transitiongroup">
        { React.cloneElement(this.props.children || <div />, props) }
      </TransitionGroup>
    );
  },
});
