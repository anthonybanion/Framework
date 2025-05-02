// ==========================================
// 
// Description: This file is the entry point for the Express server.
//
// File: server.js
// Author: Anthony Bañon
// Created: 2025-05-02
// Last Updated: 2025-05-02
// ==========================================



const app = require('./app');
const sequelize = require('./products/database');

// Synchronize DB
sequelize.sync().then(() => {
  console.log('Synchronized database');

 // Start server only if DB syncs correctly
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error synchronizing the database:', err);
});