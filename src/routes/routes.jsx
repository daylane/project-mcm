import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Layout from "../components/Layout";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

       <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      </Route>

      </Routes>
    </BrowserRouter>
  );
}
