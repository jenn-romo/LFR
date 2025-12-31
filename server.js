console.log('Initializing server script...');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = parseInt(process.env.PORT) || 8080;

// Serve static files from the 'dist' directory (Vite default output)
const DIST_DIR = path.join(__dirname, 'dist');

console.log(`Environment PORT: ${process.env.PORT}`);
console.log(`Selected PORT: ${PORT}`);
console.log(`Dist Directory: ${DIST_DIR}`);

// Basic Health Check (important for Cloud Run)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Check if dist exists
if (fs.existsSync(DIST_DIR)) {
  console.log('Dist directory found. Serving static files.');
  app.use(express.static(DIST_DIR));
} else {
  console.error('WARNING: Dist directory NOT found. Static files will not be served.');
}

// Fallback for SPA routing
app.get('*', (req, res) => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    console.error(`404: Index file not found at ${indexPath}`);
    res.status(404).send('Application build not found. Check deployment logs.');
  }
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server successfully started on http://0.0.0.0:${PORT}`);
});

server.on('error', (e) => {
  console.error('Server failed to start:', e);
});

// Catch unhandled rejections/exceptions to prevent silent crashes
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});