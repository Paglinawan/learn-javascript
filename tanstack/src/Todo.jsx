import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const res = await fetch("http://localhost:3000/todos");
  return res.json();
};

const Todo = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <>
      <h1>Todo一覧</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
