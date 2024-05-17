import { ChangeEvent, FormEvent, useState } from 'react'
import { useAddTask } from '../apis/todo'

export default function CreateTask() {
  const addTask = useAddTask()
  const [formState, setFormState] = useState({
    task: '',
    description: '',
    completed: false,
  })

  const submit = () => {
    if (addTask.isPending) {
      return
    }

    const { task } = formState
    setFormState({ task: '', description: '', completed: false })

    if (task && typeof task === 'string') {
      addTask.mutate({ task })
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      submit()
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit()
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          data-submitting={addTask.isPending}
          aria-label="Add Task"
        >
          {addTask.isError && <p>Error!</p>}
          <div>
            <textarea
              aria-label="Write Task"
              name="task"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={formState.task}
              placeholder="What's your next task?"
            />
          </div>
          <button data-submitting={addTask.isPending}>Add Task</button>
        </form>
      </div>
    </>
  )
}
