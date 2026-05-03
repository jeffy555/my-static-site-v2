const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const notes = [];

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const note = req.body.note;
  notes.push(note);
  res.status(201).json({ note });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
