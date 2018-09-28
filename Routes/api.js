const express = require('express');
// const Userrouter = express.Router();

const Userrouter = require('express-promise-router')();
const userControler = require('./../Controllers/users');
Userrouter.route('/')
.get(userControler.index)
.post(userControler.newuser)
module.exports =  Userrouter;

