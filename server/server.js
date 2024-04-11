// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Import route handlers
const authRoutes = require('./routes/authRoutes');

// Mount route handlers
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
