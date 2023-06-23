const express = require('express')
const mongoose = require('mongoose')
const authenticate = require('../middleware/authentication')
const PostModel = require('../model/postModel')
const UserModel = require('../model/userModel')

const postRouter = express.Router()

postRouter.get('/', (req, res) => {
    res.send('this is user post page')
})

postRouter.post('/createpost', async (req, res) => {
    const { content, picture } = req.body
    console.log(req.user)
    if (!content && !picture) {
        return res.send({ msg: 'please write something' })
    }
    try {
        const post = new PostModel({ content, picture, postedBy: req.user._id })
        await post.save().then(result => {
            res.send({ data: result })
        })
    } catch (error) {
        res.status(403).send({ err: error.message })
    }
})

postRouter.get('/getpost', async (req, res) => {
    try {
        const post = await PostModel.find({ postedBy: req.user._id }).populate("postedBy").sort('-createdAt')
        res.send(post)
    } catch (error) {
        res.status(402).send({ err: error.message })
    }
})

postRouter.get('/getallpost', async (req, res) => {
    try {
        const post = await PostModel.find().populate('postedBy').populate('comments.postedBy').sort('-createdAt')
        res.send(post)
    } catch (error) {
        res.status(402).send({ err: error.message })
    }
})

postRouter.put('/like', async (req, res) => {
    const data = await PostModel.findById(req.body.postId)
    if (data.likes.includes(req.user._id)) {
        PostModel.findByIdAndUpdate(req.body.postId, {
            $pull: { likes: req.user._id }
        }, {
            new: true
        }).then(result => {
            return res.status(200).send(result)
        }).catch(err => {
            return res.status(400).send({ msg: err.message })
        })
    }

    else {
        PostModel.findByIdAndUpdate(req.body.postId, {
            $push: { likes: req.user._id }
        }, {
            new: true
        }).then(result => {
            return res.status(201).send(result)
        }).catch(err => {
            return res.status(400).send({ msg: err.message })
        })
    }

})

postRouter.post('/likerender', async (req, res) => {
    const data = await PostModel.findById(req.body.postId)
    if (data.likes.includes(req.user._id)) {
        PostModel.findByIdAndUpdate(req.body.postId).then(result => {
            return res.status(201).send(result)
        }).catch(err => {
            return res.status(400).send({ msg: err.message })
        })
    }

    else {
        PostModel.findByIdAndUpdate(req.body.postId).then(result => {
            return res.status(200).send(result)
        }).catch(err => {
            return res.status(400).send({ msg: err.message })
        })
    }

})

postRouter.put('/comment', async (req, res) => {
    const comment = {
        text: req.body.text,
        postedBy: req.user._id
    }
    PostModel.findByIdAndUpdate(req.body.postId, {
        $push: { comments: comment }
    }, {
        new: true
    }).populate("comments.postedBy").then(result => {
        console.log(result)
        return res.status(200).send(result)
    }).catch(err => {
        console.log(err.message)
        return res.status(400).send({ msg: err.message })

    })
})

postRouter.get('/commentrender', async (req, res) => {

    PostModel.findById(req.body.postId).populate("comments.postedBy").then(result => {
        return res.status(200).send(result)
    }).catch(err => {
        return res.status(400).send({ msg: err.message })
    })
})

postRouter.delete('/deletepost/:postId',(req,res)=>{
    PostModel.findOne({_id:req.params.postId}).populate("postedBy","_id").then(result=>{
        if(result.postedBy._id.toString() === req.user._id.toString()){
            PostModel.findByIdAndDelete(req.params.postId).then(ans=>{
                res.status(200).send(ans)
            }).catch(err=>{
                res.status(400).send("something went wrong")
            })
        }else{
            res.status(400).send('you can not delete this post')
        }
     }).catch(err=>{
        res.status(400).send(err.message)
    })
})

//getting all post of following user
postRouter.get('/followinguserpost',async(req,res)=>{
    PostModel.find({postedBy:{$in:req.user.following}}).populate('postedBy').populate('comments.postedBy').then(result=>{
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
})

module.exports = postRouter