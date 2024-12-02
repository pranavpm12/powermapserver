const express = require('express');
const Feedback = require('../models/feedbackModel'); 
const feedbackRouter = express.Router();

feedbackRouter.post('/submitfeedback', async (req, res) => {
    try {
        const { feedbackText, userId } = req.body;

        if (!feedbackText || !userId) {
            return res.status(400).json({
                success: false,
                message: 'Feedback text and userId are required',
            });
        }

        const feedback = new Feedback({
            feedbackText,
            userId,
        });

        await feedback.save(); 

        res.status(200).json({
            success: true,
            message: 'Feedback submitted successfully',
            data: feedback,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit feedback',
        });
    }
});

feedbackRouter.get('/viewfeedback', async (req, res) => {
    try {
        const feedbackList = await Feedback.find() 
        res.status(200).json({
            success: true,
            data: feedbackList,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve feedback',
        });
    }
});

module.exports = feedbackRouter; 
