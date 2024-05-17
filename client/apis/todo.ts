import request from 'superagent'
import { Task, Todos } from '../../models/Todo'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export async function fetchToDoTasks() {
  const res = await request
    .get('https://paataka.cloud/api/_/glove/todos')
    .auth('DVd-nq_UoZY', { type: 'bearer' })

  return res.body as Todos
}

export async function fetchToDoTaskDetails(id: number) {
  const res = await request
    .get(`https://paataka.cloud/api/_/glove/todos/${id}`)
    .auth('DVd-nq_UoZY', { type: 'bearer' })

  return res.body as Task
}

export function useAddTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: { task: string }) => {
      const res = await request
        .post(`https://paataka.cloud/api/_/glove/todos`)
        .auth('DVd-nq_UoZY', { type: 'bearer' })
        .send(values)

      return res.body
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['toDo'] })
    },
  })
}
