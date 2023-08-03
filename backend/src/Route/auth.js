const authRouter = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const UserModel = require("../model/userModel");
const successRedirect = `https://twitter-umber.vercel.app`
const failedRedirect = `https://twitter-umber.vercel.app/auth`

authRouter.get('/', (req, res) => {
	res.send('this is auth page')
})

// successfull login route  

authRouter.get("/login/success", async (req, res) => {

	if (!req.user) {
		return res.redirect(`${failedRedirect}?authsuccess=false`)
	  }
		try {
			let num = Math.floor(Math.random() * 10000);
			const { name, email, picture } = req.user._json
			const data = await UserModel.find({ email })
			if (data.length >= 1) {
				var token = jwt.sign({ userId: data[0]._id }, 'twitter');
				let id = data[0]._id
				res.redirect(`${successRedirect}?userID=${id}&token=${token}`)
			} else {
				const user = new UserModel({ name, email, pic:picture,username:`${name}${num}`})
				await user.save()
				var token = jwt.sign({ userId: user._id }, 'twitter');
				let id = data[0]._id
				res.redirect(`${successRedirect}?userID=${id}&token=${token}`)
			}

		} catch (error) {
			res.redirect(`${failedRedirect}`)
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
});

authRouter.get(
	"/google/callback",
	passport.authenticate("google", { 
		successRedirect: '/auth/login/success',
		failureRedirect: "/auth/login/failed",
	})
);


// logout route 
authRouter.get("/logout", (req, res) => {
	req.logout();
	res.redirect(failedRedirect);
});

module.exports = authRouter
