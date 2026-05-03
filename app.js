const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let notes = [];

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/notes', (req, res) => {
  res.status(200).json(notes);
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json(note);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
