const mongoose =  require("mongoose");

const schema = mongoose.Schema

const vehicleSchema = new schema({
    userID : {type:String},
    vehicle : {type:String},
    vehicleNumber : {type:String}
})

const vehicleModel = mongoose.model('vehicle_tb',vehicleSchema)
module.exports=vehicleModel
