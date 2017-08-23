import React from 'react'
import { listen } from 'rx-react-js'
import { validationObserver } from './store'

@autobind
export default class RelectValidation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.unsub = validationObserver::listen(this)
  }

  componentWillUnmount() {
    this.unsub()
  }

  render () {
    const { inputValue } = this.state

    return <div>Is Number: {inputValue ? 'Yes' : 'No'}</div>
  }
}
