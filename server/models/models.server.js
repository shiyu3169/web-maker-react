var connectionString = "mongodb://127.0.0.1:27017/web-maker-react"; // for local

if (process.env.MLAB_USERNAME_WEBDEV) {
    // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = "mongodb://" + username + ":" + password;
    connectionString += "@ds121183.mlab.com:21183/heroku_cmtdczks";
}

var mongoose = require("mongoose");

var db = mongoose.connect(
    connectionString,
    { useNewUrlParser: true }
);

module.exports = db;
