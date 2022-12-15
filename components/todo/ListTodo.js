import Todo from "./Todo";

const ListTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo>{todo}</Todo>
      ))}
    </div>
  );
};

export default ListTodo;
