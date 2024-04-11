import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color);
`;

export const Title = styled.h1`
  font-family: var(--font-poppins);
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-family: var(--font-dm-sans);
  font-size: 14px;
  text-align: center;
  padding-bottom: 10px;

  a {
    color: var(--secondary-color);
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;
`;

export const Input = styled.input`
  font-family: var(--font-poppins);
  font-size: 14px;
  font-weight: 300;
  color: var(--secondary-color);
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--secondary-color);
  background: none;
`;

export const Button = styled.button`
  font-family: var(--font-poppins);
  font-size: 14px;
  font-weight: 700;
  text-transform: lowercase;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--primary-color);
`;
