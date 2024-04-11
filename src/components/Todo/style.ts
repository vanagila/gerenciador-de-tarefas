import styled from "styled-components";

export const TodoContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const TodoContent = styled.p`
  font-size: 16px;
`;

export const TodoStatus = styled.span`
  font-weight: bold;
`;

export const TodoCreatedAt = styled.span`
  font-size: 12px;
  color: #666666;
`;
