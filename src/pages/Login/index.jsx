import { Container } from "@mui/material";
import { ContentForm } from "./style";
import logo from "../../assets/logo.svg";

export default function Login() {
  return (
    <Container>
      <ContentForm>
        <img className="logo" src={logo} />
      </ContentForm>
    </Container>
  );
}
