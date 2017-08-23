import React from 'react'
import { listen } from 'rx-react-js'
import { observer } from './store'

@autobind
export default class ReflectInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.unsub = observer::listen(this)
  }

  componentWillUnmount() {
    this.unsub()
  }

  render () {
    const { inputValue } = this.state

    return <div>You have typed {inputValue}</div>
  }
}
