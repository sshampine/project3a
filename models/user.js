require mongoose = require("mongoose");
require bcrypt = require("bcrypt-nodejs");

var userSchema = mongoose.Schema({
	local: {
		email: String,
		password: String,
	},
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", userSchema);