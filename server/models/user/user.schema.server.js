var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
    {
        username: { type: String, unique: true },
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        dateCreated: { type: Date, default: Date.now }
    },
    { collection: "user" }
);

module.exports = UserSchema;
