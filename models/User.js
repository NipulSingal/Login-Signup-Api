// models/User.js
var mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
   firstname:{
     type:String,
     require:true
   },
   lastname:{
    type:String,
    require:true
  },
  telnum:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
   password:{
     type:String,
     require:true
   }
});
module.exports = User = mongoose.model('UserSchema',UserSchema);