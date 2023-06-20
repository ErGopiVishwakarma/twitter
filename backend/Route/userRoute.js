
const express = require('express')
const UserModel = require('../model/userModel')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authentication')
const PostModel = require('../model/postModel')

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('hii this is user page')
})
userRouter.post('/signup', async(req, res) => {
    const { name, email, pic } = req.body
    try {
            const user = new UserModel({ name, email, pic })
            await user.save() 
            res.send({ msg: 'user has been successfully signup....' ,user})
    } catch (error) {
        console.log('something went wrong....')
        res.send({ msg: 'something went wrong...', error: error.message })
    }
})

userRouter.post('/login', async (req, res) => {
    const { email} = req.body
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
                    const token = jwt.sign({ userId: user[0]._id }, 'twitter')
                    res.send({ msg: 'user has been successfully login...', token, user:user[0] })
        } else {
            res.send({ msg: 'login failed...' })
        }
    } catch (error) {
        res.send({ msg: 'somthing went wrong...', error: error.message })
    }
})



userRouter.get('/allusers',authenticate, async (req, res) => {
    const searchData = req.query.search ? {
        $or: [
            { "name": { $regex: req.query.search, $options: 'i' } },
            { "email": { $regex: req.query.search, $options: 'i' } },
        ]
    } : {};

    const user = await UserModel.find(searchData).find({ _id: { $ne: req.user.id }})
    res.send(user)
})

 
// logic for looking the profile of other users 
userRouter.get('/profile/:userId',authenticate,(req,res)=>{
    UserModel.find({_id:req.params.userId}).then(user=>{
         PostModel.find({postedBy:req.params.userId}).populate("postedBy").then(posts=>{
            res.status(200).send({user,posts})
         }).catch(err=>{
            res.send({err:err.message})
         })
    }).catch(err=>{
        res.status(400).send({err:err.message})
    })
})



module.exports = {
    userRouter
}