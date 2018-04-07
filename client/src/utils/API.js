import axios from "axios";

export default {
  // Gets all bets
  getBets: function () {
    return axios.get("/api/bets");
  },
  // Gets all bets where user is better
  getUserBets: function (username) {
    return axios.get("/api/bets",{
      params: {
        better: username
      }
    });
  },
  // Gets all bets where user is better_two
  getUserBetsTwo: function (username) {
    return axios.get("/api/bets",{
      params: {
        better_two: username
      }
    });
  },
  // Gets all bets where user is validator
  getValidatorBets: function (username) {
    return axios.get("/api/bets",{
      params: {
        validator: username
      }
    });
  },
   // Gets all bets where user is winner
   getWins: function (username) {
    return axios.get("/api/bets",{
      params: {
        winner: username
      }
    });
  },
   // Gets all bets where user is loser
   getLosses: function (username) {
    return axios.get("/api/bets",{
      params: {
        loser: username
      }
    });
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
    return axios.put("/api/bets/" + id, betData)
  },
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
   // Gets all user bets
   getCurrentUser: function (username) {
    return axios.get("/api/users",{
      params: {
        username: username
      }
    });
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  //Updates a bet
  updateUser: function (id, betData) {
    return axios.put("/api/users/" + id, betData)
  },
  // Authenticates a user
  authenticateUser: function (userData) {
    return axios.post("/auth/login", userData);
  },
  // Sign up a user
  signUp: function (userData) {
    return axios.post("/auth/register", userData);
  }
};

