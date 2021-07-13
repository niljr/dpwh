const express = require('express');

// const emojis = require('./emojis');
// const faqs = require('./faqs');
const users = require('./users');
const authenticate = require('./auth');
const tasks = require('./tasks');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

// router.use('/emojis', emojis);
router.use('/users', users);
router.use('/authenticate', authenticate);
router.use('/tasks', tasks);

module.exports = router;
