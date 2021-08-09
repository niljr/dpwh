const express = require('express');

// const emojis = require('./emojis');
// const faqs = require('./faqs');
const users = require('./users');
const authenticate = require('./auth');
const tasks = require('./tasks');
const revisions = require('./revisions');
const suspensions = require('./suspensions');
const timeExtensions = require('./timeExtensions');
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
router.use('/revisions', revisions);
router.use('/suspensions', suspensions);
router.use('/timeExtensions', timeExtensions);

module.exports = router;
