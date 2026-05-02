const express = require('express');
const cors = require('cors');
const app = express();
const notes = [
    { id: 1, content: 'Note 1' },
    { id: 2, content: 'Note 2' }
];

app.use(cors({ origin: 'https://mango-ocean-00d11710f.7.azurestaticapps.net' }));

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        version: '1.0.0',
        timestamp: new Date()
    });
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    note ? res.json(note) : res.status(404).json({ error: 'Note not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});