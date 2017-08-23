import { clear, write } from '../utils.js'

function *foo() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

export default function sample04() {
  clear('Sample 04')
  write('manually iterate a generator')

  const it = foo()
  let message

  do {
    message = it.next()
    write(message)

  } while (!message.done)
}

if (IsNode)
  sample04()
