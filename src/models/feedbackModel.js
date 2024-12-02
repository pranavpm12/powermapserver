const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    feedbackText: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_tb', 
        required: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback; 