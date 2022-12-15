import Link from "next/link";

const Header = () => {
  return (
    <div class="bg-white dark:bg-slate-900 px-6 py-4 ring-1 ring-slate-900/5 shadow-md mb-4">
      <div class="flex flex-row ">
        <div class="grow">
          <h2 class="text-base font-xl tracking-tight font-medium text-xl">
            Todo App
          </h2>
        </div>
        <div class="basis-1/12 ">
          <Link href="/" className="underline decoration-indigo-500">
            Home
          </Link>
        </div>
        <div class="basis-1/12 ">
          <Link href="/new-todo" className="underline decoration-indigo-500">
            Add Todo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
