import { useState } from "react";
import { registerUser } from "../../services/Auth/register";
import { useNavigate } from "react-router-dom"
import "./register.css";

function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await registerUser({ nome, email, senha });
      navigate("/")
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-register">
      <div className="register-screen">
        <form className="register-form" onSubmit={handleSubmit}>

          <h1>Get Started Now</h1>

          <div className="inputs-register">
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div>
              <p>Email address</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                minLength={8}
              />
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
      </div>
      <div className="image-register"></div>
    </div>
  );
}

export default Register;
