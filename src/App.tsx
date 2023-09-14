import { useState } from 'react'
import './App.css'
import { Switch } from './Switch'

function App() {
  const [condition, setCondition] = useState<undefined | string>()

  return (
    <>
      <h3>React Switch Component</h3>

      <div className='field-container'>
        <label htmlFor="select-input">Possible values:</label>
        <select id="select-input" onChange={(e) => setCondition(e.target?.value)}>
          <option>Not defined</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <Switch condition={condition}>
        <Switch.Case when={1}>
          <div className="case-item">1</div>
        </Switch.Case>
        <Switch.Case when={2}>
          <div className="case-item">2</div>
        </Switch.Case>
        <Switch.Default>
          <div className="case-item">Default</div>
        </Switch.Default>
      </Switch>
    </>
  )
}

export default App
