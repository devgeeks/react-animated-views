import React from 'react';
import animateView from 'react-animated-views';

import '../css/pagetwo.css';

const PageTwo = React.createClass({

  displayName: 'PageTwo',

  propTypes: {
    push: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  goToPageThree() {
    const { push } = this.props;
    push('/three', 'slideUp');
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
          className="button-next-page"
          onClick={ this.goToPageThree }
        >
          Slide Up to page three &raquo;
        </a>
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

module.exports = animateView(PageTwo);
