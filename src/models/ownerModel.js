const mongoose = require("mongoose");

const schema = mongoose.Schema

const ownerSchema = new schema({
        login_id : {type:mongoose.Types.ObjectId, ref:'login_tb'},
        companyName:{type : String},
        PhoneNumber:{type : String},
        Email:{type : String},
})

const ownerModel = mongoose.model('owner_tb',ownerSchema)
module.exports=ownerModel