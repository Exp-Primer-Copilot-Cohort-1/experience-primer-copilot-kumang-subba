// Create web server and listen on port 3000
// Use the express module
const express = require('express');
const app = express();
const port = 3000;

// Use the body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import comments.js module
const comments = require('./comments');

// GET /comments
app.get('/comments', (req, res) => {
  // Call comments.getAll() and send the result
  comments.getAll().then((comments) => {
    res.send(comments);
  });
});

// POST /comments
app.post('/comments', (req, res) => {
  // Call comments.add() with the body of the request
  comments.add(req.body).then((comment) => {
    // Send the result
    res.send(comment);
  });
});

// Start the web server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});