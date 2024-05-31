const mongoose = require("mongoose");
//schema creation
const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique:true},
  password: { type: String, required: true },
},
//collection creation
{ collection: ' user-data'}
);
//create model
const model = mongoose.model('UserData', User)
//export model
module.exports =  model
