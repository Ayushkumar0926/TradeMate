const {model} = require("mongoose");

const {UsersSchema} = require("../schemas/UserSchema");

const UsersModel = new model("users", UsersSchema);

module.exports = {UsersModel};