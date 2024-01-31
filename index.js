const express = require('express');
const connectToMongoDb = require('./db');
const urlRoute = require('./routes/url');
const app = express();
app.use(express.json());
const port = 8000;

connectToMongoDb('mongodb://localhost:27017/short-url');

app.use('/url', urlRoute);

app.listen(port, console.log('Listening on port', port));