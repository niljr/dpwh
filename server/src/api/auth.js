const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const router = express.Router();

// Login
router.post('/', async (req, res, next) => { 
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }).lean();

        if (!user) {
            return next({ statusCode: 400, message: 'Invalid username/password' });
        }
        
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);

            return res.json({ status: 'ok', data: {
                id: user._id,
                token,
                role: user.role,
                username: user.username,
                name: user.name,
                position: user.position
            }})
        }

        next({ message: 'Invalid username/password' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
