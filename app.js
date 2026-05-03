const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/notes', (req, res) => {
  res.json([{ id: 1, content: 'Sample note' }]);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
