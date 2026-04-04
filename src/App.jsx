import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import Inicio from './pages/Inicio/inicio'

function PrivateRoute({children}) {
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