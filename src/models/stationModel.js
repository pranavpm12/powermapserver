const mongoose = require("mongoose");

const schema = mongoose.Schema

const stationSchema = new schema({
        Owner_id : {type:mongoose.Types.ObjectId, ref:'owner_tb'},
        StationName:{type : String},
        City:{type : String},
        ChargingPortsNo:{type : String},
        TypeofConnectors:{type : String},
        ChargingPower:{type : String},
        OperatingHours:{type : String},
        ChargingRate:{type : String},
        StationStatus:{type : String},
        Address:{type : String}

})

const stationModel = mongoose.model('station_tb',stationSchema)
module.exports=stationModel