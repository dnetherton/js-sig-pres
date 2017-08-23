import React from 'react'
import { listen } from 'rx-react-js'
import { subject, observer } from './store'

@autobind
export default class Entry extends React.Component {
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

  onChange(e) {
    const inputValue = e.target.value
    subject.next({ ...this.state, inputValue })
  }

  render () {
    const { inputValue } = this.state

    return <input type='text' value={inputValue} onChange={this.onChange} />
  }
}
