import React from "react";

interface DeleteTodoButtonProps {
  onDelete: () => void;
}

export const DeleteTodoButton: React.FC<DeleteTodoButtonProps> = ({
  onDelete,
}) => {
  return <button onClick={onDelete}>Excluir</button>;
};
