import { SubtitleStyled, Container } from "./style";

interface SubtitleProps {
  content: string;
}
export const Subtitle = (props: SubtitleProps) => {
  return (
    <Container>
      <SubtitleStyled> {props.content} </SubtitleStyled>
    </Container>
  );
};
