import { clear, write } from '../utils.js'
import Rx from 'rxjs/Rx'

const subject = new Rx.Subject()
const observable = subject

export default function sample12() {
  clear('Sample 12')
  write('send data nowhere')

  subject.next(1)
  subject.next(2)

  const subscription = observable.subscribe({
    next: x => write(x)
  })

  subject.next(3)
  subject.next(4)

  subscription.unsubscribe()
}

if (IsNode)
  sample12()
