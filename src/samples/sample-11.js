import { clear, write } from '../utils.js'
import Rx from 'rxjs/Rx'

function *foo() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

export default function sample11() {
  clear('Sample 11')
  write('observing a generator')

  const observer = Rx.Observable.from(foo())

  observer.forEach(x => write(x))
}

if (IsNode)
  sample11()
