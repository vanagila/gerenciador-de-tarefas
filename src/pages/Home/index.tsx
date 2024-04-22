import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { HomeContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { listTodos } from "../../services/todo.service";
import { Todo } from "../../components/Todo";
import { Title } from "../../components/Title";

interface Todo {
  id: string;
  content: string;
  done: string;
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
    };

    getTodos();
  }, [token]);

  return (
    <HomeContainer>
      <Title content="Minhas tarefas" />
      {todos.map((todo, id) => (
        <Todo
          key={id}
          content={todo.content}
          status={todo.done.toString() !== "true" ? "Incompleta" : "Completa"}
          createdAt={formatDistanceToNow(new Date(todo.createdAt), {
            locale: ptBR,
          })}
        />
      ))}
    </HomeContainer>
  );
};
