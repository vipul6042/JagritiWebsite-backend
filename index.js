// server.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your backend server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
