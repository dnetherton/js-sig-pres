import { clear, write } from '../utils.js'

function* gen() {
  let input = {done: false, value: undefined}
  while (!input.done) {
    input = yield
    write('Received value', input)
  }
}

export default function sample08() {
  clear('Sample 08')
  write('Inverted generator - pushing values')

  const obj = gen()

  obj.next() //value is ignored - have to call once to 'start' generator
  obj.next({value: 'a', done: false})
  obj.next({value: 'b', done: false})
  obj.next({value: 'c', done: false})
  obj.next({value: 'd', done: false})
  obj.next({done :true})
}

if (IsNode)
  sample08()
