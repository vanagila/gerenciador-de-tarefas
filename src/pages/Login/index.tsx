import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user.service";
import { toast } from "react-toastify";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Container } from "../../components/Container";
import { Subtitle } from "../../components/Subtitle";
import { Button } from "../../components/Button";

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
      <Title content="Entre na sua conta" />
      <Subtitle content=" Não tem uma conta?"></Subtitle>
      <Link to="/signup"> Faça seu cadastro</Link>
      <form onSubmit={handleSubmit}>
        <Input type="text" labelText="Email" inputName="email" />
        <Input type="password" labelText="Senha" inputName="password" />
        <Button text="entrar" typeBtn="submit"></Button>
      </form>
    </Container>
  );
};
