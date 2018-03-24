import axios from "axios";

export default {
  // Saves a book to the database
  register: function(userData) {
    return axios.post("/api/register", userData);
  }
};
