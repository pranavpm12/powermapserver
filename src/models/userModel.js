const mongoose = require("mongoose");

const schema = mongoose.Schema

const userSchema = new schema({
    login_id : {type:mongoose.Types.ObjectId, ref:'login_tb'},
    Name: { type: String },
    Email: { type: String },
    PhoneNumber: { type: Number },
    state : { type : String},
    district : {type : String}, 
    

})

const userModel = mongoose.model('user_tb',userSchema)
module.exports=userModel 
