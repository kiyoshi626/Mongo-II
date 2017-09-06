const bodyParser = require('body-parser');
const express = require('express');
const Posts = require('./post.js');

const STATUS_USER_ERROR = 422;

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

server.post('/users', (req, res) => {
    // Post.find
});

// TODO: write your route handlers here

module.exports = { server };
