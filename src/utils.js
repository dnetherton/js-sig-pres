import when from 'when'

require('babel-runtime/core-js/promise').default = when.Promise

if (IsNode)
  require('source-map-support').install({ environment: 'node' })

function clearChrome(title) {
  const e = document.getElementById('output')
  e.innerHTML = `<div>${title}</div>`
}

function writeChrome() {
  const e = document.getElementById('output')
  const args = [...arguments].map(x => JSON.stringify(x)).join(', ')
  e.insertAdjacentHTML('beforeend', `<div>${args}</div>`)
}

function clearNode(title) {
  console.log('\n\n\n\n\n\n')
  console.log(title)
  console.log('-----------')
}

function writeNode() {
  console.log(...arguments)
}

export const clear = IsChrome ? clearChrome : clearNode
export const write = IsChrome ? writeChrome : writeNode
