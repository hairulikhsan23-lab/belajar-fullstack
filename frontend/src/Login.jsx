import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      alert("Email / Password salah!");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f1f1" }}>
      <form onSubmit={handleLogin} style={{ background: "white", padding: 30, borderRadius: 10, width: 350 }}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <p style={{ textAlign: "center", color: "gray" }}>Silakan masuk ke akun kamu</p>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: 12, marginBottom: 10, boxSizing: "border-box" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: 12, marginBottom: 15, boxSizing: "border-box" }} />
        <button style={{ width: "100%", background: "#3498db", color: "white", padding: 12, border: "none", borderRadius: 8, fontWeight: "bold" }}>Masuk</button>
        <p style={{ textAlign: "center", fontSize: 12, color: "gray" }}>Coba: admin@test.com / 123456</p>
      </form>
    </div>
  );
}

export default Login;