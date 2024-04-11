import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user.service";
import { toast } from "react-toastify";
import {
  Button,
  Container,
  Input,
  Label,
  Subtitle,
  Title,
} from "../SignUp/style";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const emailInput = ev.currentTarget.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    const passwordInput = ev.currentTarget.querySelector(
      'input[name="password"]'
    ) as HTMLInputElement;

    const user = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    const response = await login(user);

    if (response.ok === false) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.token || null)
      );
      navigate("/");
    }
  };

  return (
    <Container>
      <div>
        <Title>Entre na sua conta</Title>
        <Subtitle>
          Não tem uma conta?
          <Link to="/signup"> Faça seu cadastro</Link>
        </Subtitle>
        <form onSubmit={handleSubmit}>
          <div>
            <Label>Email:</Label>
            <Input type="text" name="email" />
          </div>
          <div>
            <Label>Senha:</Label>
            <Input type="password" name="password" />
          </div>
          <Button type="submit">entrar</Button>
        </form>
      </div>
    </Container>
  );
};
