import styled from "styled-components";

export const ContainerStyled = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--secondary-color);

  a {
    color: var(--secondary-color);
    font-family: var(--font-dm-sans);
    font-size: 14px;
    padding-bottom: 10px;
  }
`;
