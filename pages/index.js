import ListTodo from "../components/todo/ListTodo";

function Home({ todos }) {
  return (
    <div>
      <p className="m-6 font-medium text-xl underline decoration-double decoration-pink-500">
        Todo
      </p>
      <ListTodo todos={todos} />
      <p className="m-6 font-medium text-xl underline decoration-double decoration-indigo-500">
        Completed
      </p>
      <ListTodo todos={todos} />
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      todos: [
        { name: "todo 1", time: "15 Dec 2022" },
        { name: "todo 2", time: "15 Dec 2022" },
        { name: "todo 3", time: "15 Dec 2022" },
      ],
    },
  };
}

export default Home;
