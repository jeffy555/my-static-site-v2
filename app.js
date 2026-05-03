const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy data for notes
let notes = [
    { id: 1, content: 'This is a note' },
    { id: 2, content: 'This is another note' }
];

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Healthy' });
});

// Get all notes
app.get('/api/notes', (req, res) => {
    res.status(200).json(notes);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});