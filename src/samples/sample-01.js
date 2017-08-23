import { clear, write } from '../utils.js'

const arr = ['a', 'b', 'c', 'd', 'e']

export default function sample01() {
  clear('Sample 01')
  write("iterate an array's values")

  const eArr = arr[Symbol.iterator]()
  write(eArr.next())
  write(eArr.next())
  write(eArr.next())
  write(eArr.next())
  write(eArr.next())
  write(eArr.next())

  for (let letter of arr) // implicit conversion to iterator
    write(letter)
}

if (IsNode)
  sample01()
