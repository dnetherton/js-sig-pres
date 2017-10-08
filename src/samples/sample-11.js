import { clear, write } from '../utils.js'
import Rx from 'rxjs/Rx'

const subject = new Rx.Subject()
const observable = subject.map(x => x * 2)

export default function sample11() {
  clear('Sample 11')
  write('composing an observable')

  const subscription = observable.subscribe({
    next: x => write(x)
  })

  subject.next(1)
  subject.next(2)
  subject.next(3)
  subject.next(4)

  subscription.unsubscribe()
}

if (IsNode)
  sample11()
