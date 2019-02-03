var axios = require('axios');

const BASE_URL = "http://34.73.1.166/api";

var user = "";

const utils = {

    // Registre
    register: function(username, email, password) {
        user = username;
        return axios.get(BASE_URL + '/:' + username + '&:' + password + '&:' + email);
    },

    // Agafar totes les tips d'una ciutat
    getCityReviews: function(city) {
        return axios.get(BASE_URL + '/city/' + city);
    },

    // Login
    login: function(username, password) {
        user = username;
    },

    // Logout
    logout: function() {
        user = "";
    },

    //    

  

}

export default utils;
