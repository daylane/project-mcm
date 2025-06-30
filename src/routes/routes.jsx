import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Empresa from "../pages/Cadastros/Empresas/indes";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="cadastros/empresa" element={<Empresa />} />
      </Route>

      </Routes>
    </BrowserRouter>
  );
}
