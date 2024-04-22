import { ButtonStyled } from "./style";

interface ButtonProps {
  text: string;
  typeBtn: string;
}

export const Button = (props: ButtonProps) => {
  return <ButtonStyled> {props.text} </ButtonStyled>;
};
