const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());   
app.use(express.static('public'));

// Mount the router
// app.use('/', notesRouter);

// Routes
// HTML Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes
// Get all notes
// app.get('/api/notes', (req, res) => {
//   fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     const notes = JSON.parse(data);
//     res.json(notes);
//   });
// });


// // Save a new note
// app.post('/api/notes', (req, res) => {
//   const newNote = {
//     id: uuidv4(),
//     title: req.body.title,
//     text: req.body.text
//   };

//   fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     const notes = JSON.parse(data);
//     notes.push(newNote);

//     fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes), (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       res.json(newNote);
//     });
//   });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
