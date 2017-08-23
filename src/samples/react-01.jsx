import React from 'react'
import { Subject } from 'rxjs/Rx'
import { listen } from 'rx-react-js'

//These would normally be in a different file
export const subject = new Subject()
export const observer = subject.map(s => ({ ...s, hide: s.value > 10 }))

@autobind
export default class SampleReact01 extends React.Component {
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

  onClick(e) {
    const value = this.state.value === undefined ? 0 : this.state.value + 1
    subject.next({ ...this.state, value })
  }

  render () {
    const { value, hide } = this.state

    return <div>
      {!hide && <button onClick={this.onClick}>Increment</button>}
      Value: {value}
    </div>
  }
}
