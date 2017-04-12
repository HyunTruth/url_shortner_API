const express = require('express');
const router = express.Router();

const register = require('../controller/register')

/* GET home page. */
router.post('/register', (req, res) => {
  register.post(req, res)
})

module.exports = router;
