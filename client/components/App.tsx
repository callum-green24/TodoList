import { Outlet } from 'react-router-dom'
import ToDo from './ToDo'

function App() {
  return (
    <div>
      <h1>To-Do-List</h1>
      <Outlet />
    </div>
  )
}

export default App
