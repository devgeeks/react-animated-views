function noneIn(action, component, done) {
  done();
}

function noneOut(action, component, done) {
  done();
}

export default (component, options, done) => {
  const { action, direction } = options;
  if (direction === 'in') {
    noneIn(action, component, done);
  } else {
    noneOut(action, component, done);
  }
};
