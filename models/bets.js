const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betsSchema = new Schema({
  better: { type: String, required: true },
  wager: { type: String, required: true },
  better_two: {type: String, required: true},
  validator: {type: String},
  description: {type: String, required: true},
  closed: {type: Boolean, default: false},
  endDate: {type: Date}
});

const Bets = mongoose.model("Bets", betsSchema);

module.exports = Bets;
