// require('dotenv').load();
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, './', 'build');
const port = process.env.PORT || 8080;
const cron = require('node-cron');
const moment = require('moment');
const admin = require('firebase-admin');


app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('server is up at', port);
});
