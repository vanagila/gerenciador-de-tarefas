import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext, useEffect, useState } from "react";
import { HomeContainer, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { Todo } from "../../components/Todo";
import { Title } from "../../components/Title";
import { TodosContext } from "../../providers/Todo";
import { TodoInput } from "../../components/TodoInput";
import { TodoButton } from "../../components/TodoButton";
import { Wrapper } from "../../components/Wrapper";

export const Home: React.FC = () => {
  const { listTodos, todos, createTodo, updateTodoStatus } =
    useContext(TodosContext);
  const [newTodoContent, setNewTodoContent] = useState("");
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token") ?? "false");

  const handleCreateTodo = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createTodo(token, {
        content: newTodoContent,
        createdAt: new Date().toISOString(),
      });

      setNewTodoContent("");
    } catch (error) {
      console.error("Erro ao criar novo Todo:", error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/signup");
      return;
    }

    const getTodos = async () => {
      await listTodos(token);
    };

    getTodos();
  }, [token, listTodos, navigate]);

  const handleStatusChange = async (id: string, status: boolean) => {
    try {
      await updateTodoStatus(token, id, status);
    } catch (error) {
      console.error("Erro ao atualizar status do Todo:", error);
    }
  };

  return (
    <Wrapper>
      <HomeContainer>
        <Form onSubmit={handleCreateTodo}>
          <TodoInput
            value={newTodoContent}
            onChange={(event) => setNewTodoContent(event.target.value)}
            placeholder="Digite sua nova tarefa"
            required
          />
          <TodoButton type="submit">Adicionar</TodoButton>
        </Form>
        <Title content="Minhas tarefas" />
        {todos.map((todo, id) => (
          <Todo
            status={todo.done ?? false}
            id={todo.id}
            key={id}
            content={todo.content}
            createdAt={formatDistanceToNow(new Date(todo.createdAt), {
              locale: ptBR,
            })}
            onStatusChange={handleStatusChange}
          />
        ))}
      </HomeContainer>
    </Wrapper>
  );
};
