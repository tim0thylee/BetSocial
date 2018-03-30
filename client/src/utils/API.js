import axios from "axios";

export default {
  // Gets all bets
  getBets: function () {
    return axios.get("/api/bets");
  },
  // Gets the bet with the given id
  getBet: function (id) {
    return axios.get("/api/bets/" + id);
  },
  // Deletes the bet with the given id
  deleteBet: function (id) {
    return axios.delete("/api/bets/" + id);
  },
  // Saves a bet to the database
  saveBets: function (betData) {
    return axios.post("/api/bets", betData);
  }
};
