var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = mongoose.Schema({
	local: {
		email: String,
		password: String,
	},
});

UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validatePassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;