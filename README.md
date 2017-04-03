# step
> async control flow

## Installation

```sh
$ npm install --save step
```

## Usage

You can pass arguments in your `next` call, they can be accessed after the `next` parameter.

```js
const step = require('step')

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
    console.log(foo, bar, baz) // => foo bar baz
  }
)
```

If the last step attempts to call `next`, it will be ignored.

## License

MIT © [Sean Wilson](https://imsean.me)
