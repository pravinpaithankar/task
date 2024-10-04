import { useState } from 'react'
import TaskManager from './components/TaskManager';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App">
      <TaskManager />
    </div>
  )
}

export default App
