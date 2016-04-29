import React from 'react';
import animateView from 'react-animated-views';

import '../css/pagethree.css';

const PageThree = React.createClass({

  displayName: 'PageThree',

  propTypes: {
    push: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  goBack() {
    const { pop } = this.props;
    pop('slideUp');
  },

  render() {
    const { style } = this.props;

    return (
      <div className="pagethree" style={ style }>
        <p>Page Three</p>
        <a
          className="button-back"
          onClick={ this.goBack }
        >
          &laquo; Go back to to page two
        </a>
      </div>
    );
  },
});

module.exports = animateView(PageThree);
