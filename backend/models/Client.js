const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} =require('validator');
const bcrypt = require('bcrypt');


const  clientSchema = new Schema({
  username:{
    type:String,
    //custom error message
    required:[true,"Please entrer a username"],
    unique:true,
  },
email:{
  type:String,
  //custom error message
  required:[true,"Please entrer an email"],
  unique:true,
  lowercase:true,
  validate:[isEmail,"PLease enter a valid email"]
},
password:{
    type:String,
    required:[true,"Please enter your password"],
    minlength:[8,"please input a min length of 6 characters"],
},
accessToken: { 
    type: String, 
    default: null
 }
});

//fire a function after a new user has been saved to db...
clientSchema.post('save',function(doc,next){
console.log('new client was saved',doc);
next()
})

//fire a function before a doc is saved to db...
clientSchema.pre('save',async function(next){
  //hash users password...
  const salt = await bcrypt.genSalt()
  this.password=await bcrypt.hash(this.password,salt)
;  //this refers to user...
console.log("client about to be saved",this)
  next()
})

module.exports = mongoose.model("Client",clientSchema)