import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos' 

function App() {
  const [count, setCount] = useState([])

  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
      </div>
    </>
  )
}

export default App
