import { Container, LabelStyled, InputStyled } from "./style";

interface InputProps {
  type: string;
  labelText: string;
  inputName: string;
}

export const Input = (props: InputProps) => {
  return (
    <Container>
      <LabelStyled>{props.labelText}:</LabelStyled>
      <InputStyled type={props.type} name={props.inputName} />
    </Container>
  );
};
