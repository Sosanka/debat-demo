import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

function HomeRoute() {
  const navigate = useNavigate();

  return <Home onRegister={() => navigate("/register")} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
