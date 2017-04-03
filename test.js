const step = require('.')

step(
  function test(next) {
    next('foo')
  },
  (next, foo) => {
    next(foo, 'bar')
  },
  (next, foo, bar) => {
    next(foo, bar, 'baz')
  },
  (next, foo, bar, baz) => {
    console.log(foo, bar, baz)
  }
)
