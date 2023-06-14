const authRouter = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken')
const UserModel = require('../model/userModel')

authRouter.get('/', (req, res) => {
	res.send('this is auth page')
})

// successfull login route 

authRouter.get("/login/success", async (req, res) => {
	console.log(req.user) 
	if (req.user) {
		try {
			const { name, email, picture } = req.user._json
			// console.log(email)
			const data = await UserModel.find({ email })
			if (data.length >= 1) {
				var token = jwt.sign({ userId: data[0]._id }, 'twitter');
				res.status(200).send({
					error: false,
			
					user: req.user,
					token: token,
				});
			} else {
				const user = new UserModel({ name, email, picture })
				await user.save()
				// console.log(user)
				var token = jwt.sign({ userId: user._id }, 'twitter');
				res.status(200).send({
					error: false,
					message: "Successfully Loged In",
					user: req.user,
					token: token,
				});
			}

		} catch (error) {
			res.status(401).json({ error: true, message: error.message })
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
