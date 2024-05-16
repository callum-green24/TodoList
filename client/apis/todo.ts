import request from 'superagent'
import { Todos } from '../../models/Todo'

export async function fetchToDoTasks() {
  const res = await request
    .get('https://paataka.cloud/api/_/glove/todos')
    .auth('DVd-nq_UoZY', { type: 'bearer' })

  return res.body as Todos
}
