import { clear, write } from '../utils.js'

function *foo() {
  yield Promise.resolve(1).delay(1000)
  yield Promise.resolve(2).delay(1000)
  yield Promise.resolve(3).delay(1000)
  yield Promise.resolve(4)
  yield Promise.resolve(5)
}

async function sample() {
  clear('Sample 07')
  write('Iterate and await a set of promises')

  for (let number of foo())
    write(await number)
}

export default function sample07() {
  sample().done()
}

if (IsNode)
  sample().done()
