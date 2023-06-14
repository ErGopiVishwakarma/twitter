const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    picture:{type:String}
},{
    timestamps:true,
    _v:false
})

const UserModel = mongoose.model("User",userSchema)

module.exports = UserModel