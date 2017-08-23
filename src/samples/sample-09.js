import { clear, write } from '../utils.js'
import Rx from 'rxjs/Rx'

const subject = new Rx.Subject()
const observable = subject

export default function sample09() {
  clear('Sample 09')
  write('Simplest subject and observable')

  const subscription = observable.subscribe({
    next: x => write(x)
  })

  subject.next('a')
  subject.next('b')
  subject.next('c')
  subject.next('d')

  subscription.unsubscribe()
}

if (IsNode)
  sample09()
