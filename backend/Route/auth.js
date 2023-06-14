const authRouter = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken')
const UserModel = require('../model/userModel')

authRouter.get('/', (req, res) => {
	res.send('this is auth page')
})

// successfull login route 

authRouter.get("/login/success", async (req, res) => {
	if (req.user) {
		try {
			const { name, email, picture } = req.user._json
			const user = new UserModel({ name, email, picture })
			await user.save()
			var token = jwt.sign({ id: 'gopi' }, 'twitter');
			res.status(200).send({
				error: false,
				message: "Successfully Loged In",
				user: req.user,
				token: token,
			});
		} catch (error) {
           res.status(401).json({error:true,message:error.message})
		}
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});



// failed route 
authRouter.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});


// authentication request route 
authRouter.get("/google", passport.authenticate("google", ["profile", "email"]), (req, res) => {
	console.log(req)
});

authRouter.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: 'http://localhost:3000',
		failureRedirect: "/login/failed",
	})
);


// logout route 
authRouter.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

module.exports = authRouter
