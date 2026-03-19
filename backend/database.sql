-- ============================================
-- Target Coaching Classesr - Database Setup
-- Run this file in your MySQL client
-- ============================================

-- Create database
CREATE DATABASE IF NOT EXISTS coaching_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Use the database
USE coaching_db;

-- Create enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  class VARCHAR(20) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Verify table was created
DESCRIBE enquiries;

-- Optional: Insert a test record
-- INSERT INTO enquiries (name, phone, class, subject, message)
-- VALUES ('Test Student', '9876543210', 'Class 10', 'Mathematics', 'Test enquiry message');

-- SELECT * FROM enquiries;

SELECT 'Database setup complete! ✅' AS status;
