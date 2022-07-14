const express = require('express');
const { connectDb } = require('./helpers/db');
const { host, port, db } = require('./configuration');
const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started auth service on ${port}`);
    console.log(`On host ${host}`);
    console.log(`Database ${db}`);
  });
}

app.get('/test', (req,res) => {
  res.send('Our auth server is working correctly');
});


connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);