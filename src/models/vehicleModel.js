const mongoose =  require("mongoose");

const schema = mongoose.Schema

const vehicleSchema = new schema({
    userID : {type:mongoose.Types.ObjectId,ref:'user_tb'},
    carID : {type:mongoose.Types.ObjectId,ref:'all_vehicle_model_tb'},
    wheelerID: {type:mongoose.Types.ObjectId,ref:'all_2wheel_model_tb'},
    vehicleNumber : {type:String}
})

const vehicleModel = mongoose.model('vehicle_tb',vehicleSchema)
module.exports=vehicleModel
