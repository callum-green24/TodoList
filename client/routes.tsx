import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import ToDo from './components/ToDo'
import TaskDescription from './components/TaskDescription'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<ToDo />} />
    <Route path="task/:id" element={<TaskDescription />} />
  </Route>,
)
