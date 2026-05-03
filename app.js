const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/notes', (req, res) => {
  res.status(200).json({ notes: ['Note 1', 'Note 2'] });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});