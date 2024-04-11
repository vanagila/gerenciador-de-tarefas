import { TodoContainer, TodoContent, TodoCreatedAt, TodoStatus } from "./style";

interface TodoProps {
  content: string;
  status: boolean;
  createdAt: string;
}

export const Todo: React.FC<TodoProps> = ({ content, status, createdAt }) => {
  return (
    <TodoContainer>
      <TodoContent>{content}</TodoContent>
      <TodoStatus>Status: {status}</TodoStatus>
      <br />
      <TodoCreatedAt>Created at: {createdAt}</TodoCreatedAt>
    </TodoContainer>
  );
};
