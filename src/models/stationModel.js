const mongoose = require("mongoose");

const schema = mongoose.Schema

const stationSchema = new schema({
        StationName:{type : String},
        City:{type : String},
        OwnerName:{type : String},
        PhoneNumber:{type : String},
        Email:{type : String},
        ChargingPortsNo:{type : String},
        TypeofConnectors:{type : String},
        ChargingPower:{type : String},
        OperatingHours:{type : String},
        ChargingRate:{type : String},
        StationStatus:{type : String}
})

const stationModel = mongoose.model('station_tb',stationSchema)
module.exports=stationModel