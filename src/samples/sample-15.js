import { clear, write } from '../utils.js'
import Rx from 'rxjs/Rx'
import { shared } from 'rx-react-js'

function logDataFlow(x) {
  write('Data:', x)
}

const subject = new Rx.Subject()
const observable = subject.do(logDataFlow)::shared()

export default function sample15() {
  clear('Sample 15')
  write('share your subscriptions')

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
  sample15()
