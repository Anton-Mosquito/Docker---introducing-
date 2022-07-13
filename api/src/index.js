const express = require('express');
const { connectDb } = require('./helpers/db');
const { host, port, db } = require('./configuration');
const mongoose = require('mongoose');
const app = express();
const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on ${port}`);
    console.log(`On host ${host}`);
    console.log(`Database ${db}`);

    // Post.find((err,posts) => {
    //   if(err) return console.error(err);
    //   console.log('posts',posts);
    // })

    const silence = new Post({name: "Silence"});
    silence.save((err, savedSilence) => {
      if(err) return console.error(err);
      console.log('saved silence with volumes!',savedSilence);
    })
  });
}

app.get('/test', (req,res) => {
  res.send('Our api server is working correctly');
});


connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);