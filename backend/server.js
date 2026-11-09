const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Data user buat cek login
const users = [
  { username: 'admin', password: '12345', nama: 'Admin' },
  { username: 'kaii', password: 'mlbb123', nama: 'Kaii' }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username & password wajib diisi!' });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.json({
      success: true,
      message: `Selamat datang, ${user.nama}!`,
      user: { username: user.username, nama: user.nama }
    });
  } else {
    return res.status(401).json({ success: false, message: 'Username atau password salah!' });
  }
});

app.listen(5000, () => console.log('Server jalan di http://localhost:5000'));