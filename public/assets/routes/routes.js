const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// const server = require(server.js);

// GET /api/notes - Read the db.json file and return all saved notes as JSON
router.get('/api/notes', (req, res) => {
  // Read the db.json file
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Parse the JSON data from the file
    const notes = JSON.parse(data);
    // Send the parsed notes as a JSON response
    res.json(notes);
  });
});

// POST /api/notes - Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
router.post('/api/notes', (req, res) => {
  // Read the db.json file
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Parse the JSON data from the file
    const notes = JSON.parse(data);
    // Create a new note object with a unique ID
    const newNote = {
      id: uuidv4(), // Generate a unique ID
      title: req.body.title,
      text: req.body.text
    };
    // Add the new note to the array of notes
    notes.push(newNote);
    // Write the updated array of notes back to the db.json file
    fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      // Send the new note as a JSON response
      res.json(newNote);
    });
  });
});

module.exports = router;
module.exports = server;
