'use strict';

const express = require("express");

const router = express.Router();

const Users = require('../models/index.js').login;

const basicAuth = require('../auth/basicAuth.js');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo

router.post('/signup', async (req, res) => {

  console.log('body', req.body)
  try {
    const userRecord = await Users.create(req.body);
    const output = {
      user: userRecord,
      userToken: userRecord.token,
    };
    res.status(201).json(output);
  } catch (e) { res.status(403).send("Error Creating User"); }
});

// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', basicAuth, async (req, res) => {
  const users = {
    user: req.user,
    // token: req.token
    token: req.user.token,
  };
  res.status(200).json(users);
  
});

module.exports = router;
