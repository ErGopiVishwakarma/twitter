const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    pic:{type:String,default:''},
    username:{type:String},
    backgroundpic:{type:String,default:''},
    followers:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    following:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
},{
    timestamps:true,
    __v:false 
})

const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel