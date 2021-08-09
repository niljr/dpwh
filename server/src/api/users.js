const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const router = express.Router();

// Read ALL
router.get('/', async (req, res, next) => {
    try {
        const items = await User.find({});
        res.json(items);
    } catch (error) {
        next(error);
    }
});

// Read ALL
router.get('/getAllEngineers', async (req, res, next) => {
    try {
        const items = await User.find().where('role').all(['engineer']);

        res.json(items.map(item => ({
            id: item._id,
            name: item.name,
            position: item.position
        })));
    } catch (error) {
        next(error);
    }
});

// Read One
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await User.findOne({
            _id: id
        });

        console.log(item)

        if (!item) return next();

        return res.json(item);
    } catch (error) {
        next(error);
    }
});

// Create One
router.post('/createOne', async (req, res, next) => {
    try {
        const { username, password: plainTextPassword } = req.body;

        if (!username || typeof username !== 'string') {
            return next({
                message: 'Invalid username'
            });
        }

        const password = await bcrypt.hash(plainTextPassword, 10);
        const inserted = await User.create({
            ...req.body,
            password
        });

        res.json(inserted);
    } catch (error) {
        console.log('error', error.code);
        if (error.code === 11000) {
            return next({
                message: 'Username already in use'
            });
        }

        next(error);
    }
});

router.post('/change-password', async (req, res, next) => {
    const { token, newPassword } = req.body;

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);

        const _id = user._id;

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await User.update({
            _id
        }, { $set: { password: hashedPassword } });

        res.json({ status: 'success' });
    } catch (error) {
        console.log(error)
        next(error);
    }
});

// Update One
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await schema.validateAsync(req.body);
        const item = await User.findOne({ _id: id });

        if (!item) return next();

        await User.update({
            _id: id
        }, { $set: value });

        res.json(value);
    } catch (error) {
        next(error);
    }
});

// Delete One
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await User.findOne({ _id: id });

        if (!item) return next();

        await User.update({
            _id: id
        }, { $set: { is_deleted: true } });

        res.json({
            message: 'Success'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
