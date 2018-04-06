class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(token, user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      console.log("success")
      return localStorage.getItem('token') !== null;
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getToken() {
      return localStorage.getItem('token');
    }

    static getUser() {
      return localStorage.getItem('user');
    }


  }
  
  export default Auth;