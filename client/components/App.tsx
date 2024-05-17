import { Outlet } from 'react-router-dom'
import ToDo from './ToDo'
import CreateTask from './CreateTask'

function App() {
  return (
    <div>
      <h1>To-Do-List</h1>
      <Outlet />
    </div>
  )
}

export default App
