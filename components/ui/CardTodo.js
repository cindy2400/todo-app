import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo/todo-slice";
import Button from "./Button";

const CardTodo = ({ id, name, time }) => {
  const dispatch = useDispatch();

  const onDeleteTodoHandler = () => {
    dispatch(todoActions.deleteTodo(id));
  };

  return (
    <div className="box-content p-2 m-6 border-2">
      <div class="flex flex-row ">
        <div class="grow">
          <p className="text-md font-medium">{name}</p>
          <p className="text-xs">{time}</p>
        </div>
        <div class="basis-1/12 ">
          <Button classname="bg-emerald-500 text-gray-100 ">Checklist</Button>
        </div>
        <div class="basis-1/12 ">
          <Button
            onclick={onDeleteTodoHandler}
            classname="bg-rose-600 text-gray-100"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardTodo;
