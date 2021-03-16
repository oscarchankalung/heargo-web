require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// SERVE STATIC FILE
app.use(express.static(path.join(__dirname, 'build')));

// APPLY CORS
app.use(cors());

// SERVE FRONT-END
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3030, () => {
  console.log('Api Server is listening at port 3030');
});
