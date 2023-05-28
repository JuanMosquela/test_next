import TodoItem from "../components/TodoItem";
import * as todoApi from "../utils/todoApi";

export default async function Home() {
  // const todos = await todoApi.getTodos();

  return (
    <div>
      <h1>list of todos</h1>
      {/* <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul> */}
    </div>
  );
}
