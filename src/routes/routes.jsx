import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
