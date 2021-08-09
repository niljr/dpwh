const mongoose = require('mongoose');

const RevisionSchema = new mongoose.Schema({
    revisionNumber: { type: String, required: true },
    dateEntry: { type: Date, required: true },
    dateApproved: { type: Date },
    reasonForRevision: { type: String, required: true },
    status: { type: String, required: true },
    taskId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task' 
    },
    
}, { collection: 'revisions', timestamps: true });

const model = mongoose.model('RevisionSchema', RevisionSchema);

module.exports = model;