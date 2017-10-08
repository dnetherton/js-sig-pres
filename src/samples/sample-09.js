import { clear, write } from '../utils.js'

function *filter(iter, fn) {
  let input = {done: false, value: undefined}
  const iterNext = iter()
  iterNext.next() // start the next generator

  while (!input.done) {
    input = yield
    if(fn(input.value))
      iterNext.next(input)
  }

  iterNext.next({done: true})
}

function* gen() {
  let input = {done: false, value: undefined}
  while (!input.done) {
    input = yield
    write('Received value', input)
  }
}

export default function sample09() {
  clear('Sample 09')
  write('Inverted generator - pushing and filtering values')

  const obs = filter(gen, x => x % 2 === 0)

  obs.next() //value is ignored - have to call once to 'start' generator
  obs.next({value: 1, done: false})
  obs.next({value: 2, done: false})
  obs.next({value: 3, done: false})
  obs.next({value: 4, done: false})
  obs.next({value: 5, done: false})
  obs.next({done :true})
}

if (IsNode)
  sample09()
