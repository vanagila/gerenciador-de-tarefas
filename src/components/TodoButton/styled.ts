import styled from "styled-components";

export const StyledTodoButton = styled.button`
  font-family: var(--font-poppins);
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 600;
  background-color: var(--secondary-color);
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  text-transform: lowercase;

  &:hover {
    //background-color: darken(var(--secondary-color), 10%);
  }
`;
