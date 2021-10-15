'use strict';

const express = require("express");
const bcrypt = require('bcrypt');
const base64 = require('base-64');

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
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
     console.log('After user Creation')
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});

// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', basicAuth, async (req, res) => {
  let users = req.body.user;
  res.status(200).json(users);
  
});

module.exports = router;
