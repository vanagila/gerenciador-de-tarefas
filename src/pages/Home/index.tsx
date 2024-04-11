import { useEffect, useState } from "react";
import { HomeContainer, HomeTitle } from "./styled";
import { useNavigate } from "react-router-dom";
import { listTodos } from "../../services/todo.service";
import { Todo } from "../../components/Todo";

interface Todo {
  id: string;
  content: string;
  status: boolean;
  createdAt: string;
}

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token") ?? "false");

  useEffect(() => {
    if (!token) {
      return navigate("/signup");
    }
  });

  useEffect(() => {
    const getTodos = async () => {
      const response = await listTodos(token);
      setTodos(response.data);
      console.log(response.data);
    };

    getTodos();
  });

  return (
    <HomeContainer>
      <HomeTitle>Minhas Tarefas</HomeTitle>
      {todos.map((todo, id) => (
        <Todo
          key={id}
          content={todo.content}
          status={todo.status}
          createdAt={todo.createdAt}
        />
      ))}
    </HomeContainer>
  );
};
