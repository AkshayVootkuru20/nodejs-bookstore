const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://0.0.0.0:27017/booksDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
