import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Progress } from './components/creation/Progress'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Progress />
    </div>
  )
}

export default App
