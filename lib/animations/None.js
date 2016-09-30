'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function noneIn(action, component, done) {
  done();
}

function noneOut(action, component, done) {
  done();
}

exports.default = function (component, options, done) {
  var action = options.action;
  var direction = options.direction;

  if (direction === 'in') {
    noneIn(action, component, done);
  } else {
    noneOut(action, component, done);
  }
};