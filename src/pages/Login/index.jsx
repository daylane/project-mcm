import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Formik>
      <Form>
        <Card
          sx={{
            minWidth: 500,
            minHeight: 400,
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5">Login</Typography>
            <Box>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <TextField
                id="password"
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="password">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate("/home")}
              >
                Entrar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Form>
    </Formik>
  );
}
