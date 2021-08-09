const express = require('express');
const jwt = require('jsonwebtoken');
const Revision = require('../model/revision');

const router = express.Router();

// ADD
router.post('/', async (req, res, next) => {
    try {
        const inserted = await Revision.create(req.body);

        res.json(inserted);
    } catch (error) {
        next(error);
    }
});

// GET ALL
router.get('/', async (req, res, next) => {
    try {
        const items = await Revision.find({});
        res.json(items); 
    } catch(error) {
        next(error);
    }
});

// GET One
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Revision.findOne({
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
        console.log(id);
        const item = await Revision.findOne({
            _id: id
        });

        if (!item) return next();

        await Revision.update({
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
        const item = await Revision.findOne({
            _id: id
        });

        if (!item) return next();

        await Revision.update({
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