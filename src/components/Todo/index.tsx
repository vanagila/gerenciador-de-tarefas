import { TodoContainer, TodoContent, TodoCreatedAt, TodoStatus } from "./style";

interface TodoProps {
  content: string;
  status: string;
  createdAt: string;
}

export const Todo: React.FC<TodoProps> = ({ content, status, createdAt }) => {
  return (
    <TodoContainer>
      <TodoContent>{content}</TodoContent>
      <TodoStatus>Status: {status}</TodoStatus>
      <br />
      <TodoCreatedAt>Criado há {createdAt}</TodoCreatedAt>
    </TodoContainer>
  );
};
