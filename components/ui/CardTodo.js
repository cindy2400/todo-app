import Button from "./Button";

const CardTodo = ({ name, time }) => {
  return (
    <div className="box-content p-4 m-2 border-2">
      <div class="flex flex-row ">
        <div class="grow">
          <p className="text-lg font-medium">{name}</p>
          <p className="text-sm">{time}</p>
        </div>
        <div class="basis-1/12 ">
          <Button classname="bg-emerald-500 text-gray-100 ">Archive</Button>
        </div>
        <div class="basis-1/12 ">
          <Button classname="bg-rose-600 text-gray-100">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default CardTodo;
