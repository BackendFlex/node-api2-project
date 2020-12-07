const express = require('express');
const server = express();
server.use(express.json());

//import postRoute & commentRoutes server
const postRoutes = require('./posts/postRoutes');
// const commentRoutes = requires('./comments/commentsRouters');

// these allow us to use postRoutes for all /posts requests & /comments requests
server.use('/api/posts/comments', commentRoutes);
// server.use('api/post/comments', commentRoutes);

server.use('/', (req, res) => {
    res.status(200).send('Hello from express');
})

module.exports =server;