import { clear, write } from '../utils.js'

const arr = ['a', 'b', 'c', 'd', 'e'].map(x => x + x)

export default function sample02() {
  clear('Sample 02')
  write('Array composing (not lazy)')

  write(arr)
}

if (IsNode)
  sample02()
