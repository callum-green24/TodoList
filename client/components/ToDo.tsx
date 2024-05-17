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

  const handleButtonClick = () => {
    console.log('Button clicked!')
  }

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
        <h2 className="header">Tasks</h2>
         <div>
          <CreateTask />
        </div>
        <div className="container">
          {data.items.map((tasks) => (
            <div className="postick" key={tasks.id}>
              {tasks.task}
              <button
                className="image"
                type="submit"
                onClick={handleButtonClick}
              >
                <img
                  className="image"
                  src="data:image/jpeg;base64,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"
                  alt="rubbish bin"
                ></img>
              </button>

            </div>
          ))}
        </div>
      </>
    )
  }
}
