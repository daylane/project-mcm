import {  Card, CardContent, Container } from "@mui/material";
import { ContentForm } from "./style";
import logo from "../../assets/logo.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate()


  return (
    <Formik
			>
				<Form>
					<Card className="w-full py-6 px-2 shadow-lg border">
						<CardContent>
							<h2 className="text-2xl font-medium mb-4">Login</h2>
							<div className="mb-4">
								<Field
									name="login"
									render={({ field }) => (
										<InputField type='email' label={'E-mail'} placeholder={'marketing@amvox.com.br'} />
									)}
								/>
								<ErrorMessage name="login" component="div" className="text-red-500 text-xs" />

							</div>
							<div className="mb-4">
								<Field
									name="password"
									render={({ field }) => (
										<InputField type='password' label={'Senha'} name="password" placeholder={'Insira sua senha'}
										/>
									)}
								/>
								<ErrorMessage name="password" component="div" className="text-red-500 text-xs" />

							</div>
							{/* <div className="text-sm text-black font-medium mb-4">
								<a onClick={goNextPass} className="hover:underline">Esqueceu a senha?</a>
							</div> */}
							<Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" >
							
							</Button>
						</CardContent>
					</Card>
				</Form>
			</Formik>

  );
}
