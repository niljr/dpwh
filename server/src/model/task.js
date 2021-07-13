const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    projectEngineerId: { type: String, required: true },
    // contractId: { type: String, required: true, unique: true },
    componentId: { type: String, required: true },
    contractName: { type: String, required: true },
    contractorName: { type: String, required: true },
    effectivityDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    typeOfProject: { type: String, required: true },
    municipality: { type: String, required: true },
    duration: { type: Number, required: true },
    cost: { type: Number, required: true },
    accomplishment: { type: Number, required: true, default: 0 },
    status: { type: String, enum: ['NYS', 'ONGOING', 'COMPLETED', 'ACCEPTED', 'TERMINATED'], default: 'ONGOING', required: true }
}, { collection: 'Tasks' });

const model = mongoose.model('TaskSchema', TaskSchema);

module.exports = model;
