const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');
const { testConnection } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', contactRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Target Coaching Classes API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Target Coaching Classes Backend`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}\n`);
  await testConnection();
});
