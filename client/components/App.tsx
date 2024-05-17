import { Outlet } from 'react-router-dom'
import ToDo from './ToDo'

function App() {
  return (
    <div>
      <h1 className="header">To Do List</h1>
      <ToDo />
    </div>
  )
}

export default App
