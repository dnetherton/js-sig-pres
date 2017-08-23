import { Subject } from 'rxjs/Rx'
import { memoriseLastValue } from 'rx-react-js'
import { write } from './../../utils.js'
const isNumber = num => !isNaN(num) && num.length !== 0

export const subject = new Subject()
export const observer = subject::memoriseLastValue()


// Validation Observer
function validate(state) {
  const inputValue = isNumber(state.inputValue)

  return {inputValue}
}
export const validationObserver = observer.map(validate)


//With some extra stuff
function applyExtras(state) {
  const { inputValue } = state

  const plus100 = isNumber(inputValue) ? parseFloat(inputValue) + 100 : null

  return { ...state, plus100 }
}
export const extraObserver = observer.map(applyExtras)


export async function simulateSave() {
  const state = await observer.first().toPromise()

  return await post(state)
}

function post(state) {
  write('posting', JSON.stringify(state))
  return Promise.resolve('OK').delay(1000)
}
