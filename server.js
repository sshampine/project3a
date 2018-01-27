const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config");
const cors = require('cors')
const path = require("path");
const router = express.Router();

//connect to the database and load models
require("./server/models").connect(process.env.MONGODB_URI || config.dbUri);

const app = express();
app.use(cors());

//app.use(express.static("./client/build"));

// Serve up static assets
app.use(express.static("client/build"));


//tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
//pass the passport middleware
app.use(passport.initialize());

//load passport stratagies
const localSignupStrategy = require("./server/passport/local-signup");
const localLoginStrategy = require("./server/passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

//pass the authentication checker middleware
const authCheckMiddleware = require("./server/middleware/auth-check");
app.use("/api", authCheckMiddleware);

//routes
const authRoutes = require("./server/routes/auth");
const apiRoutes = require("./server/routes/api")
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

//set port, hosting services
app.set("port", (process.env.PORT || 3001));

//start server
app.listen(app.get("port"), () => {
	console.log(`Server is run on port ${app.get("port")}`)
});