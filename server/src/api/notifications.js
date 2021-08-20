const express = require('express');
const jwt = require('jsonwebtoken');
const Notification = require('../model/notification');
const router = express.Router();

// GET
router.get('/:id', async(req, res, next) => {
    try {
        // const items = await Notification.find({});
        // res.json(items)
        const items = await Notification.find({});
        console.log(items)
    } catch(error) {
        next(error)
    }
});


module.exports = router