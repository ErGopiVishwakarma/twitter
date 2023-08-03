require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require('./Route/auth');
const cookieSession = require("cookie-session");
const { userRouter } = require("./Route/userRoute");
const postRouter = require("./Route/postRoute");
const authenticate = require("./middleware/authentication");
const connection = require('./db')
const passportStrategy = require("./passport");



const app = express();
app.use(express.json())
// app.use(authenticate)

// google authentication part from here tp 
app.use(
	cookieSession({
		name: "session",
		keys: ["twitter"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors()) 
// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		methods: "GET,POST,PUT,DELETE",
// 		credentials: true,
// 	})
// );
app.get('/',(req,res)=>{
    res.send('this is home page')
})
app.use("/auth", authRoute);


//till here

app.use('/user',userRouter)
app.use('/post',authenticate,postRouter)












const port = process.env.PORT || 8080;
app.listen(port, async() =>{
	try {
		await connection
		console.log('connected to db..')
	} catch (error) {
		console.log('connection failed',error.message)
	}
	console.log(`Listenting on port ${port}...`)
}
 );