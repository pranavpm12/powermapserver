const mongoose = require("mongoose");

const schema = mongoose.Schema;

const all3wheelModelSchema = new schema(
    {
        brand: { type: String, required: true, trim: true }, // e.g., "Toyota", "Honda"
        variantname: { type: String, required: true }, // Variant name
        range: { type: Number, required: true }, // Range in km
        batteryCapacity: { type: Number, required: true } // Battery capacity in kWh


    },
);

const all3wheelModel = mongoose.model('all_3wheel_model_tb', all3wheelModelSchema);
module.exports = all3wheelModel