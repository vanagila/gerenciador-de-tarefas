import { signUp } from "../../services/user.service";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

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
      <Title content="Crie uma conta" />
      <Subtitle content="Já tem uma conta?" />
      <Link to="/login"> Faça login</Link>
      <form onSubmit={handleSubmit}>
        <Input type="text" labelText="Nome" inputName="name" />
        <Input type="text" labelText="Email" inputName="email" />
        <Input type="password" labelText="Senha" inputName="password" />
        <Button text="cadastrar" typeBtn="submit"></Button>
      </form>
    </Container>
  );
};
