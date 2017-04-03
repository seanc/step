const fargs = require('fast-args')

function step() {
  const steps = fargs(arguments)
  let index = 0

  const next = function next() {
    if (index === steps.length - 1) return
    const args = fargs(arguments)
    args.unshift(next)

    steps[++index].apply(null, args)
  }

  const start = steps[index](next)
}

module.exports = step
