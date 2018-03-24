import axios from "axios";

export default {

    login: function (userData) {
        return axios.get("/api/login", userData);
    }
};
