import { useContext } from "react";
import {
  TodoContainer,
  TodoContent,
  TodoCreatedAt,
  DeleteButton,
  Wrapper,
} from "./style";
import { TodosContext } from "../../providers/Todo";
import { TodoStatus } from "../TodoStatus";

interface TodoProps {
  content: string;
  createdAt: string;
  status?: boolean;
  id: string;
  onStatusChange: (id: string, status: boolean) => void;
}

export const Todo: React.FC<TodoProps> = ({
  id,
  content,
  status,
  createdAt,
  onStatusChange,
}) => {
  const { deleteTodo } = useContext(TodosContext);

  const token = JSON.parse(localStorage.getItem("token") ?? "false");

  const handleDelete = async () => {
    await deleteTodo(token, id);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onStatusChange(id, event.target.checked);
  };

  return (
    <TodoContainer>
      <TodoContent>{content}</TodoContent>
      <div>
        Status:
        <TodoStatus status={status || false} onChange={handleStatusChange} />
      </div>
      <br />
      <Wrapper>
        <TodoCreatedAt>Criado há {createdAt}</TodoCreatedAt>
        <DeleteButton onClick={handleDelete}>Deletar</DeleteButton>
      </Wrapper>
    </TodoContainer>
  );
};
