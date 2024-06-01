import React, { ReactNode } from "react";
import { StyledTodoButton } from "./styled";

interface TodoButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

export const TodoButton: React.FC<TodoButtonProps> = ({
  onClick,
  type = "button",
  children,
}) => {
  return (
    <StyledTodoButton type={type} onClick={onClick}>
      {children}
    </StyledTodoButton>
  );
};
