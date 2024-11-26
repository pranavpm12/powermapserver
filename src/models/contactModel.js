const mongoose = require("mongoose");

const schema = mongoose.Schema

const contactSchema = new schema({
    Name: { type: String },
    Email: { type: String },
    ContactNumber: { type: Number },
})

const contactModel = mongoose.model('contact_tb',contactSchema)
module.exports=contactModel