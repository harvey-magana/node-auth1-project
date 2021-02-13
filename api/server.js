const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("./users/users-router.js");
const authRouter = require('./auth/auth-router.js')
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session)

const server = express();

const sessionConfig = {
  name: 'sksession',
  secret: 'myspeshulsecret',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, // should be true in production
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new knexSessionStore(
    {
      knex: require("../database/connection.js"),
      tablename: "sessions",
      sidfieldname: "sid",
      createtable: true,
      clearInterval: 1000 * 60 * 60
    }
  )
}

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(session(sessionConfig));

server.use("/api/users", usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;