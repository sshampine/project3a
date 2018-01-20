const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index")
const app = express();
const PORT = process.env.PORT || 3003;
const https = require('https');

// Require all models
var db = require("./server/models");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const session = require("express-session");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));
app.use(routes);
//setup passport
app.use(session({ secret: "shhsecret" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//app.use("/", routes)
//app.use("/users", routes)

require("./config/passport")(passport);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/p3a",
  {
    useMongoClient: true
  }
);




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
