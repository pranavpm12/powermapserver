const mongoose = require("mongoose");

const schema = mongoose.Schema;

const all2wheelModelSchema = new schema(
    {
        brand: { type: String, required: true, trim: true }, // e.g., "Toyota", "Honda"
        model: { type: String, required: true, trim: true }, // e.g., "Corolla", "Civic"
        variants: [
            {
                name: { type: String, required: true }, // Variant name
                range: { type: Number, required: true }, // Range in km
                batteryCapacity: { type: Number, required: true } // Battery capacity in kWh
            }
        ]
    },
);

const all2wheelModel = mongoose.model('all_2wheel_model_tb', all2wheelModelSchema);
module.exports = all2wheelModel