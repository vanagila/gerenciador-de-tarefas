import { ReactNode } from "react";
import { WrapperStyled } from "./style";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};
