import { clear, write } from '../utils.js'

function *foo() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

export default function sample03() {
  clear('Sample 03')
  write('iterate with for statement')

  for (let number of foo())
    write(number)
}

if (IsNode)
  sample03()
