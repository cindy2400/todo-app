import { useSelector } from "react-redux";
import ListTodo from "../components/todo/ListTodo";

function Home() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <p className="m-6 font-medium text-xl underline decoration-double decoration-pink-500">
        Todo
      </p>
      {todos.length === 0 ? (
        <p className="m-6">Todo empty</p>
      ) : (
        <ListTodo todos={todos} />
      )}
      <p className="m-6 font-medium text-xl underline decoration-double decoration-indigo-500">
        Completed
      </p>
      {todos.length === 0 ? (
        <p className="m-6">Todo empty</p>
      ) : (
        <ListTodo todos={todos} />
      )}
    </div>
  );
}

export default Home;
