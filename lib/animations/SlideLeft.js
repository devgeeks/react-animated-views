'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function slideLeftIn(action, component, done) {
  if (action === 'push') {
    (0, _raf2.default)(function () {
      component.setState({
        style: {
          transform: 'translate3d(100%, 0, 0)',
          WebkitTransform: 'translate3d(100%, 0, 0)',
          zIndex: 2
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            zIndex: 2
          }
        });
        done();
      });
    });
  } else {
    (0, _raf2.default)(function () {
      component.setState({
        style: {
          transform: 'translate3d(-20%, 0, 0)',
          WebkitTransform: 'translate3d(-20%, 0, 0)',
          opacity: 0.9,
          zIndex: 1
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 1,
            zIndex: 1
          }
        });
        done();
      });
    });
  }
} // polyfill raf


function slideLeftOut(action, component, done) {
  if (action === 'push') {
    (0, _raf2.default)(function () {
      component.setState({
        style: {
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          opacity: 1,
          zIndex: 1
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'translate3d(-20%, 0, 0)',
            WebkitTransform: 'translate3d(-20%, 0, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 0.9,
            zIndex: 1
          }
        });
        setTimeout(done, 400);
      });
    });
  } else {
    (0, _raf2.default)(function () {
      component.setState({
        style: {
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          zIndex: 2
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'translate3d(100%, 0, 0)',
            WebkitTransform: 'translate3d(100%, 0, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransition: '-webkit-transform .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            zIndex: 2
          }
        });
        setTimeout(done, 400);
      });
    });
  }
}

exports.default = function (component, options, done) {
  var action = options.action;
  var direction = options.direction;

  if (direction === 'in') {
    slideLeftIn(action, component, done);
  } else {
    slideLeftOut(action, component, done);
  }
};