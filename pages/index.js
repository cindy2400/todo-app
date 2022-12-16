import { useSelector } from "react-redux";
import ListTodo from "../components/todo/ListTodo";

function Home() {
  const todos = useSelector((state) => state.todo.todos);

  const uncompletedTodos = todos.filter((todo) => todo.isCompleted === false);
  const completedTodos = todos.filter((todo) => todo.isCompleted === true);

  return (
    <div>
      <p className="m-6 font-medium text-xl underline decoration-double decoration-pink-500">
        Todo
      </p>
      {uncompletedTodos.length === 0 ? (
        <p className="m-6">Todo empty</p>
      ) : (
        <ListTodo todos={uncompletedTodos} />
      )}
      <p className="m-6 font-medium text-xl underline decoration-double decoration-indigo-500">
        Completed
      </p>
      {completedTodos.length === 0 ? (
        <p className="m-6">Todo empty</p>
      ) : (
        <ListTodo todos={completedTodos} />
      )}
    </div>
  );
}

export default Home;
