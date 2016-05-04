import React from 'react';
import { popFade, slideLeft, slideUp } from './animations';

function getInnerDisplayName(InnerPage) {
  return InnerPage.displayName || InnerPage.name || 'Component';
}

export default function (InnerPage) {
  return React.createClass({

    displayName: `ReactAnimatedView(${getInnerDisplayName(InnerPage)})`,

    propTypes: {
      direction: React.PropTypes.string,
      location: React.PropTypes.object,
    },

    contextTypes: {
      router: React.PropTypes.object.isRequired,
    },

    getInitialState() {
      const { direction } = this.props;
      return {
        action: direction || 'pop',
      };
    },

    componentWillMount() {
      const { location: { query: { animation } } } = this.props;
      this.setAnimationFunction(animation);
    },

    setAction(action) {
      this.setState({
        action,
      });
    },

    setAnimationFunction(animation) {
      switch (animation) {
        case 'slideLeft':
          this.animationFunction = slideLeft;
          break;
        case 'popFade':
          this.animationFunction = popFade;
          break;
        case 'slideUp':
          this.animationFunction = slideUp;
          break;
        default:
          break;
      }
    },

    animationFunction: popFade,

    push(url, animation) {
      const { router } = this.context;
      // replace current route with current route and current animation
      // this means coming back will show the correct animation
      router.replace({
        pathname: this.props.location.pathname,
        query: { ...{ animation } },
      });
      this.setAnimationFunction(animation);
      this.setAction('push');
      router.push({
        pathname: url,
        query: { animation },
      });
    },

    pop(animation) {
      const { router } = this.context;

      animation && this.setAnimationFunction(animation);
      this.setAction('pop');
      router.goBack();
    },

    componentWillLeave(done) {
      const { action } = this.state;
      this.animationFunction(this, {
        action,
        direction: 'out',
      }, done);
    },

    componentDidLeave() {
      // reset to default
      this.setState({
        action: 'pop',
      });
    },

    componentWillEnter(done) {
      const { action } = this.state;
      this.animationFunction(this, {
        action,
        direction: 'in',
      }, done);
    },

    componentDidEnter() {
      // reset to default
      this.setState({
        action: 'pop',
      });
    },

    render() {
      return (
        <InnerPage
          { ...this.state }
          { ...this.props }
          setAction={ this.setAction }
          push={ this.push }
          pop={ this.pop }
        />
      );
    },
  });
}
