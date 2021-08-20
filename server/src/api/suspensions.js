const express = require('express');
const jwt = require('jsonwebtoken');
const Suspension = require('../model/suspension');
const Task = require('../model/task');
const router = express.Router();

// ADD
router.post('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const inserted = await Suspension.create(req.body);
       
          // Add revision id to Task
          await Task.update({
            _id: id
        }, { $push: {suspensions:  inserted._id, }});

        res.json(inserted);
    } catch (error) {
        next(error);
    }
});

// GET ALL
router.get('/', async (req, res, next) => {
    try {
        const items = await Suspension.find({});
        res.json(items); 
    } catch(error) {
        next(error);
    }
});

// GET One
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Suspension.findOne({
            _id: id
        });

        if (!item) return next();

        


        return res.json(item);
    } catch (error) {
        next(error);
    }
});

// UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Suspension.findOne({
            _id: id
        });

        if (!item) return next();

        await Suspension.update({
            _id: id
        }, { $set: { ...req.body } });

        return res.json(item);
    } catch (error) {
        next(error);
    }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Suspension.findOne({
            _id: id
        });

        if (!Item) return next();

        await Suspension.update({
            _id: id
        }, { $set: { is_deleted: true } });

        res.json({
            message: 'Success'
        })

    } catch (error) {
        next(error);
    }
});





module.exports = router