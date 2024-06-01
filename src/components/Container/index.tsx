import { ContainerStyled } from "./style";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  return <ContainerStyled> {props.children} </ContainerStyled>;
};
