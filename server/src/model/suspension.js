const mongoose = require('mongoose');

const SuspensionSchema = new mongoose.Schema({
    orderNumber: { type: String, },
    status: { type: String, },
    reasonForSuspension: { type: String, },
    dateApproved: { type: Date, },
    suspensionEffectivityDate: { type: Date  },
    approvalLevel: { type: String  },
    extent:  { type: String } ,
    approvedBy: { type: String, },
    description: { type: String },
    designation: { type: String },
    suspendedToDate: { type: String },
    task: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task' 
    },
    
}, { collection: 'suspensions', timestamps: true });

const model = mongoose.model('SuspensionSchema', SuspensionSchema);

module.exports = model;