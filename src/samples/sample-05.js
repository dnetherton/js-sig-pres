import { clear, write } from '../utils.js'

function *foo() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

function *filter(iter, fn) {
  for (let m of iter)
    if (fn(m))
      yield m
}

export default function sample05() {
  clear('Sample 05')
  write('compose iteration (filter events)')

  for (let number of filter(foo(), m => m % 2 === 0))
    write(number)
}

if (IsNode)
  sample05()
