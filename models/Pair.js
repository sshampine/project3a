var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var PairSchema = new Schema({
  // `title` is required and of type String
  symbol: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  price: {
    type: Number,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Pair = mongoose.model("Pair", PairSchema);

// Export the Article model
module.exports = Pair;