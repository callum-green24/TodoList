export interface Task {
  id: number
  task: string
  description: string
  completed: boolean
}

export interface Todos {
  count: number
  items: Task[]
}
