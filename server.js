const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config");

//connect to the database and load models
require("./server/models").connect(config.dbUri);

const app = express();
//tell the app to look for static files in these directories
app.use(express.static("./server/static"));
app.use(express.static("./client/dist"));
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

//set port, hosting services
app.set("port", (process.env.PORT || 3000));

//start server
app.listen(app.get("port"), () => {
	console.log(`Server is running on port ${app.get("port")}`)
});

// const cookieParser = require("cookie-parser");

// const mongoose = require("mongoose");
// const routes = require("./routes");

// const PORT = process.env.PORT || 3003;


// const LocalStrategy = require("passport-local").Strategy;
// const flash = require("connect-flash");
// const session = require("express-session");

// // Configure body parser for AJAX requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // Serve up static assets
// app.use(express.static("client/build"));
// app.use(routes);
// //setup passport
// app.use(session({ secret: "shhsecret" }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// //app.use("/", routes)
// //app.use("/users", routes)

// require("./config/passport")(passport);

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/p3a",
//   {
//     useMongoClient: true
//   }
// );




// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
