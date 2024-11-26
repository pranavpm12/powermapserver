const express = require('express');
const contactModel = require('../models/contactModel');

const contact = express.Router();

contact.get('/contact', (req, res) => {
    console.log(req.query);
    const contactdata = {
        Name: req.query.Name,
        Email: req.query.Email,
        ContactNumber: req.query.ContactNumber
    };
    contactModel(contactdata).save().then((contactData) => {
        return res.status(200).json({
            success: true,
            error: false,
            message: 'Contact details collected',
            data: contactData
        });
    }).catch((error) => {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'Contact Failed',
            data: error
        });
    });
});

module.exports = contact;
