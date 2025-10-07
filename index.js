const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Simple Express App!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// Start the server only if this file is run directly
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

// Export the app for testing
module.exports = app;
