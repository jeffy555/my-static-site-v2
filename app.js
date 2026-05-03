const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
app.get('/api/notes', (req, res) => {
  const notes = [
    { id: 1, text: 'First note' },
    { id: 2, text: 'Second note' }
  ];
  res.status(200).json(notes);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
