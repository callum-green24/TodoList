import { useQuery } from "@tanstack/react-query"
import { fetchToDo } from "../apis/todo"

export default ToDo() {
  const {data, isLoading, isError, error} = useQuery({queryKey: ['toDo'], queryFn: () => fetchToDo()})

  if (isLoading) {
    return (<>
    <h3>Loading</h3>
    </>)
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  if (data) {
    return (
      <div>
        <h2>To Do List</h2>

      </div>
    )
  }

}
