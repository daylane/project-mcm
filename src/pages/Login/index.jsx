import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
//import logo from "../../assets/logo.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const [requestUsuario, setRequestUsuario] = useState({
        email: '',
        password: ''
      });
  const {login, loading, erro} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();

   const result = await login(requestUsuario);
   
    if(result.sucess === true){
      navigate('/home')
    }
  };


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
                value={requestUsuario.email}
                type="email"
                fullWidth
                margin="normal"
                onChange={(e) => setRequestUsuario({...requestUsuario, email: e.target.value })}
              />
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <TextField
                id="password"
                label="Senha"
                variant="outlined"
                value={requestUsuario.password}
                type="password"
                fullWidth
                margin="normal"
                onChange={(e) => setRequestUsuario({...requestUsuario, password: e.target.value })}
              />
              <ErrorMessage name="password">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                onClick={handleSubmit} 
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
