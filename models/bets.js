const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betsSchema = new Schema({
  username: { type: String, required: true },
  wager: { type: String, required: true },
  betters: [{type: String, required: true}],
  validator: {type: String, required: true},
  description: {type: String, required: true},
  endDate: {type: Date, required: true}
});

const Bets = mongoose.model("Bets", betsSchema);

module.exports = Bets;
