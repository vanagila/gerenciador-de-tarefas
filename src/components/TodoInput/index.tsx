import { StyledTodoInput } from "./style";

interface TodoInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

export const TodoInput: React.FC<TodoInputProps> = ({
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <StyledTodoInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};
