const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port:28866,
  database: process.env.DB_NAME || 'coaching_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL Database connected successfully');
    console.log(`📦 Database: ${process.env.DB_NAME}`);
    connection.release();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('   Please check your .env DB credentials');
  }
};

module.exports = { pool, testConnection };
