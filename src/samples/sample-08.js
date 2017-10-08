import { clear, write } from '../utils.js'

function* gen() {
  let input = {done: false, value: undefined}
  while (!input.done) {
    input = yield
    write('Received value', input)
  }
}

export default function sample09() {
  clear('Sample 09')
  write('Inverted generator - pushing values')

  const obs = gen()

  obs.next() //value is ignored - have to call once to 'start' generator
  obs.next({value: 'a', done: false})
  obs.next({value: 'b', done: false})
  obs.next({value: 'c', done: false})
  obs.next({value: 'd', done: false})
  obs.next({done :true})
}

if (IsNode)
  sample09()
