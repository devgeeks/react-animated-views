import React from 'react';
import animateView from 'react-animated-views';

import '../css/pagethree.css';

const PageThree = React.createClass({

  displayName: 'PageThree',

  propTypes: {
    push: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  goBack(e) {
    const { pop } = this.props;
    e.preventDefault();
    pop('slideUp');
  },

  render() {
    const { style } = this.props;

    return (
      <div className="pagethree" style={ style }>
        <p>Page Three</p>
        <div className="button-container">
          <a href="#"
            className="button-back"
            onClick={ this.goBack }
          >
            &laquo; Go back to to page two
          </a>
        </div>
      </div>
    );
  },
});

module.exports = animateView(PageThree);
