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
      todos: ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"],
    },
  };
}

export default Home;
