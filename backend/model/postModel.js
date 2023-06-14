const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  content:{type:String,default:""},
  picture:{type:String,default:""},
  postedBy:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
},{
    timestamps:true,
    _v:false
})

const PostModel = mongoose.model("Post",postSchema)

module.exports = PostModel