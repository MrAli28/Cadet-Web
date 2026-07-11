const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.JWT_SECRET || 'bcs-secret-key-12345'; // In a real app, use .env

app.use(cors());
app.use(express.json());

// SQLite Database Setup
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database');
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, () => {
      // Safely try to add status column if it doesn't exist (for existing tables)
      db.run(`ALTER TABLE messages ADD COLUMN status TEXT DEFAULT 'pending'`, (err) => {
        // Ignore error if column already exists
      });
    });
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token.' });
    req.user = user;
    next();
  });
};

// ========================
// PUBLIC ROUTES
// ========================

// 1. Submit a Contact Form Message (CREATE)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const query = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
  db.run(query, [name, email, message], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to save message.' });
    }
    res.status(201).json({ message: 'Message sent successfully!', id: this.lastID });
  });
});

// 2. Admin Login to get JWT
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  // Hardcoded Admin Credentials (for minimal setup)
  if (username === 'admin' && password === 'admin123') {
    const user = { username: 'admin', role: 'admin' };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '2h' });
    res.json({ token, message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// ========================
// PROTECTED ROUTES (Require JWT)
// ========================

// 3. Get all Contact Messages (READ)
app.get('/api/admin/messages', authenticateToken, (req, res) => {
  const query = `SELECT * FROM messages ORDER BY created_at DESC`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve messages.' });
    }
    res.json(rows);
  });
});

// 4. Update Message Status (UPDATE)
app.patch('/api/admin/messages/:id/status', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // 'pending' or 'resolved'

  if (status !== 'pending' && status !== 'resolved') {
    return res.status(400).json({ error: 'Invalid status value.' });
  }

  const query = `UPDATE messages SET status = ? WHERE id = ?`;
  db.run(query, [status, id], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to update status.' });
    }
    res.json({ message: 'Status updated successfully' });
  });
});

// 5. Delete a Message (DELETE)
app.delete('/api/admin/messages/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM messages WHERE id = ?`;
  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete message.' });
    }
    res.json({ message: 'Message deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
