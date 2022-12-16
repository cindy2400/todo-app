import Todo from "./Todo";

const ListTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} name={todo.name} time={todo.time} />
      ))}
    </div>
  );
};

export default ListTodo;
