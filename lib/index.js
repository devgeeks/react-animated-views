'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (InnerPage) {
  return _react2.default.createClass({

    displayName: 'ReactAnimatedView(' + getInnerDisplayName(InnerPage) + ')',

    propTypes: {
      direction: _react2.default.PropTypes.string,
      location: _react2.default.PropTypes.object
    },

    contextTypes: {
      router: _react2.default.PropTypes.object.isRequired
    },

    getInitialState: function getInitialState() {
      var direction = this.props.direction;

      return {
        action: direction || 'pop'
      };
    },
    componentWillMount: function componentWillMount() {
      var animation = this.props.location.query.animation;

      this.setAnimationFunction(animation);
    },
    setAction: function setAction(action) {
      this.setState({
        action: action
      });
    },
    setAnimationFunction: function setAnimationFunction(animation) {
      switch (animation) {
        case 'slideLeft':
          this.animationFunction = _animations.slideLeft;
          break;
        case 'popFade':
          this.animationFunction = _animations.popFade;
          break;
        case 'slideUp':
          this.animationFunction = _animations.slideUp;
          break;
        default:
          break;
      }
    },


    animationFunction: _animations.popFade,

    push: function push(url, animation) {
      var router = this.context.router;
      // replace current route with current route and current animation
      // this means coming back will show the cirrect animation

      router.replace({
        pathname: this.props.location.pathname,
        query: _extends({ animation: animation })
      });
      this.setAnimationFunction(animation);
      this.setAction('push');
      router.push({
        pathname: url,
        query: { animation: animation }
      });
    },
    pop: function pop(animation) {
      var router = this.context.router;


      animation && this.setAnimationFunction(animation);
      this.setAction('pop');
      router.goBack();
    },
    componentWillLeave: function componentWillLeave(done) {
      var action = this.state.action;

      this.animationFunction(this, {
        action: action,
        direction: 'out'
      }, done);
    },
    componentDidLeave: function componentDidLeave() {
      // reset to default
      this.setState({
        action: 'pop'
      });
    },
    componentWillEnter: function componentWillEnter(done) {
      var action = this.state.action;

      this.animationFunction(this, {
        action: action,
        direction: 'in'
      }, done);
    },
    componentDidEnter: function componentDidEnter() {
      // reset to default
      this.setState({
        action: 'pop'
      });
    },
    render: function render() {
      return _react2.default.createElement(InnerPage, _extends({}, this.state, this.props, {
        setAction: this.setAction,
        push: this.push,
        pop: this.pop
      }));
    }
  });
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _animations = require('./animations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInnerDisplayName(InnerPage) {
  return InnerPage.displayName || InnerPage.name || 'Component';
}