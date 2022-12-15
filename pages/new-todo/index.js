import Button from "../../components/ui/Button";

const NewTodo = () => {
  return (
    <div class="bg-white rounded-lg px-6 py-8 w-1/3 ring-1 ring-slate-900/5 shadow-xl m-auto">
      <form className="flex flex-col">
        <h1 className="m-auto font-medium text-xl">Create Todo</h1>
        <input
          type="text"
          placeholder="Todo"
          className="border-2 h-10 rounded-sm m-5"
        />
        <Button classname="bg-indigo-500 text-gray-100 m-auto">Save</Button>
      </form>
    </div>
  );
};

export default NewTodo;
