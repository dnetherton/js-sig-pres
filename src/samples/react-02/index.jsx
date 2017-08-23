import React from 'react'
import { listen } from 'rx-react-js'
import { subject, observer, simulateSave } from './store'
import Entry from './entry'
import ReflectInput from './reflect-input'
import ReflectValidation from './reflect-validation'
import RelectExtras from './reflect-extras'
import { write } from './../../utils.js'

@autobind
export default class SampleReact02 extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //simulate getting persisted data from somewhere
    subject.next({inputValue: '123'})
  }

  onSave() {
    write('Simulated saved starting ....')
    simulateSave().done(() => write('Simulated saved done ....'))
  }

  render () {
    return <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Entry />
              <button onClick={this.onSave}>Simulate Saving</button>
            </td>
            <td>
              <ReflectInput />
              <ReflectValidation />
              <RelectExtras />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}
