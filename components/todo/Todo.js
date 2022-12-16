import CardTodo from "../ui/CardTodo";

const Todo = ({ id, name, time }) => {
  return <CardTodo id={id} name={name} time={time} />;
};

export default Todo;
