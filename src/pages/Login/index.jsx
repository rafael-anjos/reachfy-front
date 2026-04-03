import { useState } from "react"
import { loginUser } from "../../services/Auth/login"
import { useNavigate } from "react-router-dom"
import "./styles.css"

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await loginUser({ email, senha })
            navigate("/")
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className="container">
      <div className="login-screen">
        <form className="login-form" onSubmit={handleSubmit}>

          <h1>Welcome back</h1>

          <div className="inputs">
            <div>
              <p>Email address</p>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <p>Password</p>
              <input type="password" placeholder="Enter your password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in...": "Sign in"}
          </button>

        </form>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default Login;
