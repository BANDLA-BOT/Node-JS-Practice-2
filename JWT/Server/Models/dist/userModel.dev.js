"use strict";

var mongoose = require("mongoose"); //schema creation


var User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, //collection creation
{
  collection: ' user-data'
}); //create model

var model = mongoose.model('UserData', User); //export model

module.exports = model;
//# sourceMappingURL=userModel.dev.js.map
