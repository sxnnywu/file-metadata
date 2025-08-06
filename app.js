// create express app
const express = require('express');
const app = express();

// cors
const cors = require('cors');
app.use(cors());

// multer middleware
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// api route
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const { originalname, mimetype, size } = req.file;
  res.json({ name: originalname, type: mimetype, size });
});

// export app
module.exports = app;