import { clear, write } from '../utils.js'

function *foo() {
  yield Promise.resolve(1)
  yield Promise.resolve(2)
  yield Promise.resolve(3).delay(1000)
  yield Promise.resolve(4)
  yield Promise.resolve(5)
}

export default function sample06() {
  clear('Sample 06')
  write('Iterate a set of promises')

  Promise
    .all( [ ...foo() ] )
    .then(allNumbers => write(allNumbers))
    .done()
}

if (IsNode)
  sample06()
