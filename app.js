const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/api/notes', (req, res) => {
    // Assume this would normally fetch from a database
    const notes = [
        { id: 1, content: 'Note 1' },
        { id: 2, content: 'Note 2' },
    ];
    res.status(200).json(notes);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
