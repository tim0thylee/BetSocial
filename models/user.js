const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  friends: [{type: String}],
  wins: {type: Number},
  loses: {type: Number}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
