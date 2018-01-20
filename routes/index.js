const express = require("express");
const passport = require("passport");
const path = require("path");
const router = express.Router();
const apiRoutes = require("./api");

// Require all models
var db = require("../models");



router.get("/", function(req, res, next) {
	res.render("index")
});

router.get("/login", function(req, res, next) {
	res.render("login", { message: req.flash("loginMessage") });
});

router.get("/signup", function(req, res) {
	res.render("signup", { message: req.flash("signupMessage") });
});

router.get("/profile", isLoggedIn, function(req, res) {
	res.render("profile", { user: req.user });
});

router.get("/logout", function(req, res) {
	req.logout();
	req.redirect("/");
});

router.post("/signup", passport.authenticate("local-signup", {
	successRedirect: "/profile",
	failureRecirect: "/signup",
	failureFlash: true,
}));

router.post("/login", passport.authenticate("local-login", {
	successRedirect: "/profile",
	failureRedirect: "/login",
	failureFlash: true,
}));

// API Routes
router.use("/api", apiRoutes);

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect("/");
}

module.exports = router; 