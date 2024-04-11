// authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Mock database (replace this with your actual database logic)
const users = [];

// POST /register - Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if username or email is already taken
  if (users.some(user => user.username === username || user.email === email)) {
    return res.status(400).send('Username or email already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user information
  users.push({ username, email, password: hashedPassword });

  res.send('User registered successfully');
});

// POST /login - Login an existing user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find(user => user.username === username);

  // Check if user exists
  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  // Compare passwords
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).send('Invalid username or password');
  }

  // TODO: Generate authentication token or session

  res.send('Login successful');
});

module.exports = router;
