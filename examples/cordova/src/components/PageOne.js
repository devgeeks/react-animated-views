import React from 'react';
import animateView from 'react-animated-views';

import '../css/pageone.css';

const PageOne = React.createClass({

  displayName: 'PageOne',

  propTypes: {
    push: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  goToPageTwo(e) {
    const { push } = this.props;
    e.preventDefault();
    push('/two', 'slideLeft');
  },

  render() {
    const { style } = this.props;

    return (
      <div className="pageone" style={ style }>
        <p>Page One</p>
        <div className="button-container">
          <a href="#"
            className="button-next-page"
            onClick={ this.goToPageTwo }
          >
            Slide Left to page two &raquo;
          </a>
        </div>
      </div>
    );
  },
});

module.exports = animateView(PageOne);
