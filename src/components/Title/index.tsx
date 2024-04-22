import { TitleStyled } from "./style";

interface TitleProps {
  content: string;
}

export const Title = (props: TitleProps) => {
  return <TitleStyled>{props.content}</TitleStyled>;
};
