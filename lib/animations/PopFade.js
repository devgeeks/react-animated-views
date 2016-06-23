'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popFadeIn(action, component, done) {
  if (action === 'push') {
    (0, _raf2.default)(function () {
      component.setState({
        style: {
          transform: 'scale3d(1, 0.95, 0.95)',
          WebkitTransform: 'scale3d(1, 0.95, 0.95)',
          opacity: 0.01,
          zIndex: 2
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'scale3d(1, 1, 1)',
            WebkitTransform: 'scale3d(1, 1, 1)',
            transition: 'all .3s ease-in-out',
            WebkitTransition: 'all .3s ease-in-out',
            transitionProperty: 'transform, opacity',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 1,
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
          transform: 'scale3d(1, 0.95, 0.95)',
          WebkitTransform: 'scale3d(1, 0.95, 0.95)',
          opacity: 0.01,
          zIndex: 1
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'scale3d(1, 1, 1)',
            WebkitTransform: 'scale3d(1, 1, 1)',
            transition: 'all .3s ease-in-out',
            WebkitTransition: 'all .3s ease-in-out',
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
} // polyfill requestAnimationFrame


function popFadeOut(action, component, done) {
  if (action === 'push') {
    (0, _raf2.default)(function () {
      component.setState({
        style: {
          transform: 'scale3d(1, 1, 1)',
          WebkitTransform: 'scale3d(1, 1, 1)',
          opacity: 1,
          zIndex: 1
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'scale3d(1, 0.95, 0.95)',
            WebkitTransform: 'scale3d(1, 0.95, 0.95)',
            transition: 'all .3s ease-in-out',
            transitionProperty: 'transform, opacity',
            WebkitTransition: 'all .3s ease-in-out',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 0.7,
            zIndex: 1
          }
        });
        setTimeout(done, 300);
      });
    });
  } else {
    (0, _raf2.default)(function () {
      component.setState({
        style: {
          transform: 'scale3d(1, 1, 1)',
          WebkitTransform: 'scale3d(1, 1, 1)',
          opacity: 1,
          zIndex: 2
        }
      });
      (0, _raf2.default)(function () {
        component.setState({
          style: {
            transform: 'scale3d(1, 0.95, 0.95)',
            WebkitTransform: 'scale3d(1, 0.95, 0.95)',
            transition: 'all .3s ease-in-out',
            transitionProperty: 'transform, opacity',
            WebkitTransition: '-webkit-transform .3s ease-in-out',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 0.01,
            zIndex: 2
          }
        });
        setTimeout(done, 300);
      });
    });
  }
}

exports.default = function (component, options, done) {
  var action = options.action;
  var direction = options.direction;

  if (direction === 'in') {
    popFadeIn(action, component, done);
  } else {
    popFadeOut(action, component, done);
  }
};