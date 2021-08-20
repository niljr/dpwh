const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    projectEngineerId: { type: String, required: true },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }
}, { collection: 'notifications', timestamps: true });

const model = mongoose.model('NotificationSchema', NotificationSchema);

module.exports = model;