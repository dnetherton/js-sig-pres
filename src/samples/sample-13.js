import { clear, write } from '../utils.js'
import Rx from 'rxjs/Rx'
import { memoriseLastValue } from 'rx-react-js'

const subject = new Rx.Subject()
const observable = subject::memoriseLastValue()

export default function sample13() {
  clear('Sample 13')
  write('remember some data')

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
  sample13()
