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
        await post.save().then(result=>{
            res.send({data:result})
        })
    } catch (error) {
        res.status(403).send({err:error.message})
    }
})

postRouter.get('/getpost',async(req,res)=>{
    try {
         const post = await PostModel.find({postedBy:req.user._id}).populate("postedBy")
         res.send(post)
    } catch (error) {
        res.status(402).send({err:error.message})
    }
})

postRouter.get('/getallpost',async(req,res)=>{
    try {
         const post = await PostModel.find().populate('postedBy')
         res.send(post)
    } catch (error) {
        res.status(402).send({err:error.message})
    }
})

postRouter.put('/like',async(req,res)=>{
    PostModel.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(400).send({msg:err.message})
        }else{
            res.send(result)
        }
    })
})

postRouter.put('/dislike',async(req,res)=>{
    PostModel.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(400).send({msg:err.message})
        }else{
            res.send(result)
        }
    })
})

module.exports = postRouter