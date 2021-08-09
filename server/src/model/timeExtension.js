const mongoose = require('mongoose');

const timeExtensionSchema = new mongoose.Schema({
    reasonForTimeExtension: { type: String, required: true },
    approvalLevel: { type: String, },
    approvedBy: { type: String, },
    duration: { type: String, },
    designation: { type: String  },
    additionalDuration: { type: String  },
    dateApproved:  { type: Date } ,
    status: { type: String, },
    taskId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task' 
    },
    
}, { collection: 'timeExtensions', timestamps: true });

const model = mongoose.model('timeExtensionSchema', timeExtensionSchema);

module.exports = model;