const express = require('express');
const contactModel = require('../models/contactModel')
const viewContact = express.Router();

viewContact.get('/viewContact', async (req, res) => {
    try {
        let data = await contactModel.find();
        if (data) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Contact details collected',
                data: data
            });
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'No contact details found',
                data: error
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'Contact Failed',
            data: error
        });
    }
});

module.exports = viewContact;
