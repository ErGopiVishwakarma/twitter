const express = require('express')
const mongoose = require('mongoose')
const authenticate = require('../middleware/authentication')
const PostModel = require('../model/postModel')
const UserModel = require('../model/userModel')

const postRouter = express.Router()

postRouter.get('/',(req,res)=>{
    res.send('this is user post page')
})


postRouter.post('/createpost',async(req,res)=>{
    const {content,picture} = req.body
    console.log(req.user)
    if(!content && !picture){
        return res.send({msg:'please write something'})
    }
    try {
        const post = new PostModel({content,picture,postedBy:req.user._id})
        await post.save()
        res.send({msg:post})
    } catch (error) {
        res.send({err:error.message})
    }
})

postRouter.get('/getallpost',async(req,res)=>{
    try {
        const post = await PostModel.find({postedBy:req.user._id})
        res.send(post)
    } catch (error) {
        
    }
})

module.exports = postRouter