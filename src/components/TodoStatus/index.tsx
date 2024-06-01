import React from "react";

interface TodoStatusProps {
  status: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoStatus: React.FC<TodoStatusProps> = ({ status, onChange }) => {
  return <input type="checkbox" checked={status} onChange={onChange} />;
};
