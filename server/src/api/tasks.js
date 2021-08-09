const express = require('express');
const webPush = require('web-push');
const jwt = require('jsonwebtoken');
const Task = require('../model/task');
const { getYear, zeroPad } = require('../helpers');

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

// Read One by _id
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

// Read One by contractId
router.get('/contractId/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Task.findOne({
            contractId: id
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
        const count = await Task.countDocuments();
        const inserted = await Task.create({
            ...req.body,
            contractId: `${getYear()}CH${zeroPad(count + 1)}`,
        });

        const subscription = {
            endpoint: 'https://fcm.googleapis.com/fcm/send/dx3sk7rHbFE:APA91bG6nQvjLJNIQigIX7yEH5R0yocDzpwaIhgSxPQcPCHoOCTv6ykaDwXNjjnWSdRPP92bDXEXkKOsYknzy675fw2SAAtqbZfuiWAtF1SG6EqKHfRO1GzqZmAwBi2XuPURlCQOoA0i',
            expirationTime: null,
            keys: {
              p256dh: 'BBaeWcuRxY_Ukiwmg9Ow8TB4ykoZd9G39IgxlocqgFR-cA3HQ3lZaWJ6KNBiGDqr1WeX8JJuoDkgtrtraX7Im_0',
              auth: 'b_L8R-5kFhUIM6M0DR8wgQ'
            }
        }

        const payload = JSON.stringify({
            title: 'Contract ID Added',
            contractId: `${getYear()}CH${zeroPad(count + 1)}`,
          });
        
          webPush.sendNotification(subscription, payload)
            .catch(error => console.error(error));

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

// Read One
router.get('/:id/revisions', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Task.find({
            _id: id
        }).populate('revisions');

        if (!item) return next();

        return res.json(item);
    } catch (error) {
        next(error);
    }
});



// // check if user is logged in
// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated()) 
//         return next();
//     res.redirect('/')
// }

module.exports = router;
