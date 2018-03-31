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
  // Saves a bet to the database
  saveBets: function (betData) {
    return axios.post("/api/bets", betData);
  },
  //Updates a bet
  update: function (id, betData) {
     return axios.put("/api/bets/"+ id, betData)
  },

  // Gets all bets
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the bet with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Saves a bet to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
>>>>>>> 8454476ab902219a03e9f4bb392192baffba9294
  }
}
