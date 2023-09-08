import { useState } from 'react'
import './App.css'
import { Switch } from './Switch'

function App() {
  const [condition, setCondition] = useState<undefined | string>()

  return (
    <>
      <h3>React Switch Component</h3>

      <div>
        <label htmlFor="select-input">Possible values:</label>
        <select id="select-input" onChange={(e) => setCondition(e.target?.value)}>
          <option>Not defined</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <Switch condition={condition}>
        <Switch.Case when={1}>
          <div>1</div>
        </Switch.Case>
        <Switch.Case when={2}>
          <div>2</div>
        </Switch.Case>
        <Switch.Default>
          <div>Default</div>
        </Switch.Default>
      </Switch>
    </>
  )
}

export default App
