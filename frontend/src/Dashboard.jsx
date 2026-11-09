import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ background: "#f1f1f1", minHeight: "100vh", padding: 20 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", background: "white", padding: 20, borderRadius: 10 }}>
          <h1>Dashboard Admin</h1>
          <button onClick={handleLogout} style={{ background: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: 8, cursor: "pointer" }}>Logout</button>
        </div>
        <p style={{ fontSize: 20 }}>Selamat datang, <b>Admin</b> 👋</p>
        <div style={{ display: "flex", gap: 15 }}>
          <div style={{ background: "white", padding: 20, borderRadius: 10, flex: 1, textAlign: "center" }}><p>Total User</p><h2>1.250</h2></div>
          <div style={{ background: "white", padding: 20, borderRadius: 10, flex: 1, textAlign: "center" }}><p>Total Order</p><h2>320</h2></div>
          <div style={{ background: "white", padding: 20, borderRadius: 10, flex: 1, textAlign: "center" }}><p>Pendapatan</p><h2>Rp 5jt</h2></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;