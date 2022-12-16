import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo/todo-slice";
import Button from "./Button";

const CardTodo = ({ id, name, time, isCompleted }) => {
  const dispatch = useDispatch();

  const onDeleteTodoHandler = () => {
    dispatch(todoActions.deleteTodo(id));
  };

  const onIsCompletedHandler = () => {
    {
      isCompleted
        ? dispatch(todoActions.setUncompletedTodo(id))
        : dispatch(todoActions.setCompletedTodo(id));
    }
  };

  return (
    <div className="box-content p-2 m-6 border-2">
      <div class="flex flex-row ">
        <div class="grow">
          <p className="text-md font-medium">{name}</p>
          <p className="text-xs">{time}</p>
        </div>
        <div class="basis-1/12 ">
          <Button
            onclick={onIsCompletedHandler}
            classname={`${
              isCompleted ? "bg-yellow-500" : "bg-emerald-500"
            } text-gray-100`}
          >
            {isCompleted ? "Undo" : "Completed"}
          </Button>
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
