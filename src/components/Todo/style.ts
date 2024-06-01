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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoCreatedAt = styled.span`
  font-size: 12px;
  color: #666666;
`;

export const DeleteButton = styled.button`
  background-color: var(--primary-color);
  font-family: var(--font-poppins);
  font-weight: 600;
  text-transform: lowercase;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  font-size: 14px;
  width: 80px;

  &:hover {
    background-color: #ff1a1a;
  }
`;
