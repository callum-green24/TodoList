import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import ToDo from './components/ToDo'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<ToDo />} />
  </Route>,
)
