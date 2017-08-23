import { clear, write } from '../utils.js'
import Rx from 'rxjs/Rx'

function logDataFlow(x) {
  write('Data:', x)
}

const subject = new Rx.Subject()
const observable = subject.do(logDataFlow)

export default function sample14() {
  clear('Sample 14')
  write('multiple subscribers means multiple invokation')

  const subscription1 = observable.subscribe({
    next: x => { /* do nothing */ }
  })

  const subscription2 = observable.subscribe({
    next: x => { /* do nothing */ }
  })

  subject.next('a')
  subject.next('b')
  subject.next('c')
  subject.next('d')

  subscription1.unsubscribe()
  subscription2.unsubscribe()
}

if (IsNode)
  sample14()
