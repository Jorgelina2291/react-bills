import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // credenciales de ejemplo (dev)
  const DEMO_USER = { email: "jor91@mail.com", password: "123456" };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // validación simple
    if (!email || !password) {
      setError("Completá email y contraseña");
      return;
    }

    // login "fake" — compara con credenciales de ejemplo
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setIsAuthenticated(true); // permite acceso al Dashboard
      navigate("/"); // redirige al dashboard (ruta protegida)
    } else {
      setError("Credenciales inválidas");
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "60px auto", padding: "16px" }}>
      <h2>Sign in </h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "8px" }}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          style={{ padding: "8px" }}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          style={{ padding: "8px" }}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div style={{ display: "flex", gap: "8px" }}>
          <button type="submit" style={{ padding: "8px 12px" }}>
            Sign in
          </button>
          <button
            type="button"
            onClick={() => {
              setEmail("jor91@mail.com");
              setPassword("123456");
            }}
            style={{ padding: "8px 12px" }}
          >
            Auto-fill
          </button>
        </div>
      </form>

      <p style={{ marginTop: "12px", color: "#666" }}>
        Try <b>jor91@mail.com</b> / <b>123456</b> to test.
      </p>
    </div>
  );
}
