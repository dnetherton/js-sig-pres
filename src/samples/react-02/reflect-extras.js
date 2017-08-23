import React from 'react'
import { listen } from 'rx-react-js'
import { extraObserver } from './store'

@autobind
export default class RelectExtras extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.unsub = extraObserver::listen(this)
  }

  componentWillUnmount() {
    this.unsub()
  }

  render () {
    const { plus100 } = this.state

    return <div>Plus 100: {plus100}</div>
  }
}
