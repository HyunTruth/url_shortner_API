const express = require('express');
const router = express.Router();

const register = require('../controller/register')
const url = require('../controller/url')
const stats = require('../controller/stats')

/* GET home page. */
router.get('/:id', (req, res) => {
  url.get(req, res);
})

router.get('/:id/stats', (req, res) => {
  stats.get(req, res);
})

router.post('/register', (req, res) => {
  register.post(req, res);
})

module.exports = router;
