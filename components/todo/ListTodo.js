import Todo from "./Todo";

const ListTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          time={todo.time}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
};

export default ListTodo;
