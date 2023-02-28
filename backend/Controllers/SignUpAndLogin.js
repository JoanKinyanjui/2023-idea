const Client = require('../models/Client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//handle errors
const handleErrors=(err)=>{
    let errors={};
    //return custom errors for validation
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach((err)=>{
              errors[err.properties.path] = err.message

        })
        console.log(errors)
    }
    // duplicate errors
   if(err.code  === 11000){
    errors['email']="that email is already registered"
   }
    return errors;
}


module.exports.signup_post =async(req,res)=>{
    const {username,email,password}= req.body;
    try{
        const client = await Client.create({username,email,password});
        // create Token ...
        const token = jwt.sign(
          {email: client.email},
          process.env.JWT_SECRET,
          {
            expiresIn:"2h"
          }
        )
        //save token ...
        client.token = token
        console.log(client.token)
       return  res.status(201).json({client,token:client.token})
    }
    catch(err){
        const errors = handleErrors(err);
        // status 400 == bad client request ...
        console.log(errors)
       return  res.status(400).json({errors})
      
    }
  }
  
module.exports.login_post = async (req,res)=>{
    try{
     const {email,password} = req.body;
     const client = await Client.findOne({email});
     if(client && (await bcrypt.compare(password,client.password))){
          //if user log in success, generate a JWT token for the user with a secret key
          const token = jwt.sign(
            {client_id: client.id,email: client.email},
            process.env.JWT_SECRET,
            {
              expiresIn:"2h"
            }
          )
          //save token ...
          client.token = token
        console.log(client)
       //return status on successfully logging in 
       return res.status(200).json({client})
     }else if(!client){
       const error={message:"Client does not exist !!!"}
       console.log(error)
       return res.status(400).json({error})
     }else{
       const error={message:"Incorrect Password !!!"}
       console.log(error)
       return res.status(400).json({error})
     }
    }catch(err){
     console.log(err)
     return res.status(400).json({err})
     
    }
   }



//Check to make sure header is not undefined, if so, return Forbidden (403)
// module.exports.checkToken = (req, res, next) => {
//   const header = req.headers['authorization'];

//   if(typeof header !== 'undefined') {
//       const bearer = header.split(' ');
//       const token = bearer[1];

//       req.token = token;
//       next();
//   } else {
//       //If header is undefined return Forbidden (403)
//       res.sendStatus(403)
//   }
// }