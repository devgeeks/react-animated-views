// polyfill raf
import raf from 'raf';

function slideUpIn(action, component, done) {
  if (action === 'push') {
    raf(() => {
      component.setState({
        style: {
          transform: 'translate3d(0, 100%, 0)',
          WebkitTransform: 'translate3d(0, 100%, 0)',
          zIndex: 2,
        },
      });
      raf(() => {
        component.setState({
          style: {
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            zIndex: 2,
          },
        });
        done();
      });
    });
  } else {
    raf(() => {
      component.setState({
        style: {
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          opacity: 0.9,
          zIndex: 1,
        },
      });
      raf(() => {
        component.setState({
          style: {
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 1,
            zIndex: 1,
          },
        });
        done();
      });
    });
  }
}

function slideUpOut(action, component, done) {
  if (action === 'push') {
    raf(() => {
      component.setState({
        style: {
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          opacity: 1,
          zIndex: 1,
        },
      });
      raf(() => {
        component.setState({
          style: {
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 0.9,
            zIndex: 1,
          },
        });
        setTimeout(done, 400);
      });
    });
  } else {
    raf(() => {
      component.setState({
        style: {
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          zIndex: 2,
        },
      });
      raf(() => {
        component.setState({
          style: {
            transform: 'translate3d(0, 100%, 0)',
            WebkitTransform: 'translate3d(0, 100%, 0)',
            transition: 'all .4s cubic-bezier(.2, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransition: '-webkit-transform .4s cubic-bezier(.2, .7, .1, 1)',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            zIndex: 2,
          },
        });
        setTimeout(done, 400);
      });
    });
  }
}

export default (component, options, done) => {
  const { action, direction } = options;
  if (direction === 'in') {
    slideUpIn(action, component, done);
  } else {
    slideUpOut(action, component, done);
  }
};
