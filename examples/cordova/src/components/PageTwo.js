import React from 'react';
import animateView from 'react-animated-views';

import '../css/pagetwo.css';

const PageTwo = React.createClass({

  displayName: 'PageTwo',

  propTypes: {
    push: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  goToPageThree(e) {
    const { push } = this.props;
    e.preventDefault();
    push('/three', 'slideUp');
  },

  goBack(e) {
    const { pop } = this.props;
    e.preventDefault();
    pop('slideLeft');
  },

  render() {
    const { style } = this.props;

    return (
      <div className="pagetwo" style={ style }>
        <p>Page Two</p>
        <a href="#"
          className="button-next-page"
          onClick={ this.goToPageThree }
        >
          Slide Up to page three &raquo;
        </a>
        <a href="#"
          className="button-back"
          onClick={ this.goBack }
        >
          &laquo; Go back to to page one
        </a>
      </div>
    );
  },
});

module.exports = animateView(PageTwo);
