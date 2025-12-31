const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the 'dist' directory (Vite default output)
const DIST_DIR = path.join(__dirname, 'dist');
app.use(express.static(DIST_DIR));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});