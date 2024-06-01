import { ReactNode } from "react";
import { TodosProvider } from "./Todo";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <TodosProvider>{children}</TodosProvider>;
};
