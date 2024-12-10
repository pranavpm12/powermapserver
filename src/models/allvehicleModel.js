const mongoose = require("mongoose");

const schema = mongoose.Schema;

const allvehicleModelSchema = new schema(
    {
        brand: { type: String, required: true, trim: true }, // e.g., "Toyota", "Honda"
        variantname: { type: String, required: true }, // Variant name
        range: { type: Number, required: true }, // Range in km
        batteryCapacity: { type: Number, required: true } // Battery capacity in kWh

    },
);

const allvehicleModel = mongoose.model('all_vehicle_model_tb', allvehicleModelSchema);
module.exports = allvehicleModel