import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchToDoTaskDetails } from '../apis/todo'

export default function TaskDescription() {
  const { id } = useParams()

  const {
    data: task,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['task'],
    queryFn: () => fetchToDoTaskDetails(Number(id)),
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

  if (task) {
    return (
      <>
        <div className="description">
          <h1> {task.task}</h1>
          <p>{task.description}</p>
        </div>
      </>
    )
  }
}
