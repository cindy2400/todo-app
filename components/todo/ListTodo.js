import Todo from "./Todo";

const ListTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo name={todo.name} time={todo.time} />
      ))}
    </div>
  );
};

export default ListTodo;
