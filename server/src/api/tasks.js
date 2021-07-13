const express = require('express');
const jwt = require('jsonwebtoken');
const Task = require('../model/task');

const router = express.Router();

// Read ALL
router.get('/', async (req, res, next) => {
    try {
        const items = await Task.find({});
        res.json(items);
    } catch (error) {
        next(error);
    }
});

// Read One
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Task.findOne({
            _id: id
        });

        if (!item) return next();

        return res.json(item);
    } catch (error) {
        next(error);
    }
});

// Create One
router.post('/', async (req, res, next) => {
    try {
        const inserted = await Task.create(req.body);

        res.json(inserted);
    } catch (error) {
        next(error);
    }
});

// Update One
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        // const value = await schema.validateAsync(req.body);
        const item = await Task.findOne({ _id: id });

        if (!item) return next();

        await Task.update({
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
        const item = await Task.findOne({ _id: id });

        if (!item) return next();

        await Task.update({
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
