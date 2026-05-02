const express = require('express');
const cors = require('cors');
const app = express();
const notes = [{ id: 1, content: 'This is a note.' }];
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: 'https://mango-ocean-00d11710f.7.azurestaticapps.net' }));
app.get('/health', (req, res) => {
  res.json({ status: 'OK', version: '1.0.0', timestamp: Date.now() });
});
app.get('/api/notes', (req, res) => {
  res.json(notes);
});
app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  res.json(note || { error: 'Note not found' });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});