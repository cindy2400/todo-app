import CardTodo from "../ui/CardTodo";

const Todo = ({ id, name, time, isCompleted }) => {
  return <CardTodo id={id} name={name} time={time} isCompleted={isCompleted} />;
};

export default Todo;
