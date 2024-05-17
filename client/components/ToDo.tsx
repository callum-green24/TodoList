import { useQuery } from '@tanstack/react-query'
import { fetchToDoTasks } from '../apis/todo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CreateTask from './CreateTask'

export default function ToDo() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['toDo'],
    queryFn: () => fetchToDoTasks(),
  })
  const [strike, setStrike] = useState(false)

  if (isLoading) {
    return (
      <>
        <h3>Loading</h3>
      </>
    )
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  if (data) {
    return (
      <>
        <div>
          <CreateTask />
        </div>
        <div>
          {data.items.map((tasks) => (
            <div key={tasks.id}>
              <input
                type="checkbox"
                onClick={() => setStrike((prev) => !prev)}
              />
              <Link
                to={`/task/${tasks.id}`}
                style={{ textDecoration: strike ? 'line-through' : 'none' }}
              >
                {tasks.task}
              </Link>
            </div>
          ))}
        </div>
      </>
    )
  }
}
