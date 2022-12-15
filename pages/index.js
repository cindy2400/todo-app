import ListTodo from "../components/todo/ListTodo";

function Home({ todos }) {
  return (
    <div>
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
        { name: "todo 4", time: "15 Dec 2022" },
        { name: "todo 5", time: "15 Dec 2022" },
      ],
    },
  };
}

export default Home;
