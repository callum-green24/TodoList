import request from 'superagent'

export async function fetchToDo() {
  const res = await request
    .get('https://paataka.cloud/api_/glove/todos')
    .auth(TOKEN, { type: 'bearer' })

  return res.body
}
