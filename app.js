const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/notes', (req, res) => {
  res.json([{ id: 1, content: 'Remember the milk' }, { id: 2, content: 'Do homework' }]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
