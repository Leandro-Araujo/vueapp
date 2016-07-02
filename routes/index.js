'use strict'
const express = require('express');
const router  = express.Router();
const user    = require('./user.js');
const post    = require('./post.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({success: true});
});

router.get('/user', user);
router.get('/post', post);


module.exports = router;
