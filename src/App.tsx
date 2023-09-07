import './App.css'
import { Switch } from './Switch'

function App() {

  return (
    <>
      <h3>React Switch Component</h3>

      <Switch condition={4}>
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
