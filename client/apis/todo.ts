import request from 'superagent'
import { Task, Todos } from '../../models/Todo'

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
