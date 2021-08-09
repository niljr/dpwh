const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    projectEngineerId: { type: String, required: true },
    contractId: { type: String },
    componentId: { type: String, required: true },
    contractName: { type: String, required: true, trim: true },
    contractorName: { type: String, required: true, trim: true },
    effectivityDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    typeOfProject: { type: String, required: true },
    municipality: { type: String, required: true },
    duration: { type: Number, required: true },
    cost: { type: Number, required: true, trim: true },
    accomplishment: { type: Number, required: true, default: 0 },
    status: { 
        type: String, 
        enum: ['NYS', 'ONGOING', 'COMPLETED', 'ACCEPTED', 'TERMINATED'], 
        default: 'ONGOING', 
        required: true 
    },
    revisions: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Revision' }
    ],
    timeExtensions: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'TimeExtension' }
    ]
}, { collection: 'tasks', timestamps: true });

const model = mongoose.model('TaskSchema', TaskSchema);

module.exports = model;
