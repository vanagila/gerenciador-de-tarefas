import { Button, Container, Input, Label, Subtitle, Title } from "./style";
import { signUp } from "../../services/user.service";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const nameInput = ev.currentTarget.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;
    const emailInput = ev.currentTarget.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    const passwordInput = ev.currentTarget.querySelector(
      'input[name="password"]'
    ) as HTMLInputElement;

    const user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    const response = await signUp(user);

    if (response.ok === false) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      navigate("/login");
    }
  };

  return (
    <Container>
      <div>
        <Title>Crie uma conta</Title>
        <Subtitle>
          Já tem uma conta?
          <Link to="/login"> Faça login</Link>
        </Subtitle>
        <form onSubmit={handleSubmit}>
          <div>
            <Label>Nome:</Label>
            <Input type="text" name="name" />
          </div>
          <div>
            <Label>Email:</Label>
            <Input type="text" name="email" />
          </div>
          <div>
            <Label>Senha:</Label>
            <Input type="password" name="password" />
          </div>
          <Button type="submit">cadastrar</Button>
        </form>
      </div>
    </Container>
  );
};
