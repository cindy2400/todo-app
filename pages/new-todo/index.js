import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/ui/Button";
import { todoActions } from "../../store/todo/todo-slice";

const NewTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const addNewTodoHandler = (e) => {
    e.preventDefault();
    dispatch(
      todoActions.setTodo({
        id: Math.random(),
        name: todo,
        time: Date(),
        isCompleted: false,
      })
    );
    setTodo("");
    router.push("/");
  };

  return (
    <div class="bg-white rounded-lg px-6 py-8 w-1/3 ring-1 ring-slate-900/5 shadow-xl m-auto">
      <form className="flex flex-col" onSubmit={addNewTodoHandler}>
        <h1 className="m-auto font-medium text-xl">Create Todo</h1>
        <input
          type="text"
          placeholder="Todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className="border-2 h-10 rounded-sm m-5"
        />
        <Button classname="bg-indigo-500 text-gray-100 m-auto">Save</Button>
      </form>
    </div>
  );
};

export default NewTodo;
