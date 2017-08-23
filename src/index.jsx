import React from 'react'
import { render } from 'react-dom'
import { Subject } from 'rxjs/Rx'
import { listen } from 'rx-react-js'
import sample01 from './samples/sample-01'
import sample02 from './samples/sample-02'
import sample03 from './samples/sample-03'
import sample04 from './samples/sample-04'
import sample05 from './samples/sample-05'
import sample06 from './samples/sample-06'
import sample07 from './samples/sample-07'
import sample08 from './samples/sample-08'
import sample09 from './samples/sample-09'
import sample10 from './samples/sample-10'
import sample11 from './samples/sample-11'
import sample12 from './samples/sample-12'
import sample13 from './samples/sample-13'
import sample14 from './samples/sample-14'
import sample15 from './samples/sample-15'
import ReactSample01 from './samples/react-01'
import ReactSample02 from './samples/react-02'

const samples = [
  sample01, sample02, sample03, sample04, sample05,
  sample06, sample07, sample08, sample09, sample10,
  sample11, sample12, sample13, sample14, sample15
]

function App(props) {
  return <div>
    {samples.map((f, i) => <button key={i} onClick={f}>Sample {i + 1}</button>)}

    <div><br/><br/><hr/>React Sample 1</div>
    <ReactSample01 />

    <div><br/><br/><hr/>React Sample 2</div>
    <ReactSample02 />

  </div>
}

render(<App/>, document.getElementById('app'))
