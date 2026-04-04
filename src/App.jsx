import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import Inicio from './pages/Inicio/inicio'

function PrivateRoute({children}) {
  const [autenticado, setAutenticado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/me", {
      credentials: "include",
    })
    .then((res) => {
      if (res.ok) setAutenticado(true);
      else navigate("/login");
    })
    .catch(() => navigate("/login"));
  }, []);

  if (autenticado === null) return <p>Carregando...</p>;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Inicio/></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;