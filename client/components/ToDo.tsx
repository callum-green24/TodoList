import { useQuery } from '@tanstack/react-query'
import { fetchToDoTasks } from '../apis/todo'
import { Link } from 'react-router-dom'

export default function ToDo() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['toDo'],
    queryFn: () => fetchToDoTasks(),
  })

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
      <div>
        {data.items.map((tasks) => (
          <div key={tasks.id}>
            <input type="checkbox" />
            <Link to={`/task/${tasks.id}`}>{tasks.task}</Link>
          </div>
        ))}
      </div>
    )
  }
}
