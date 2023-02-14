const Client = require('../models/Client');
const bcrypt = require('bcrypt');


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


// module.exports.signup_get =(req,res)=>{
//     res.render('signup');
// }

// module.exports.login_get =(req,res)=>{
//     res.render('login');
// }

module.exports.signup_post =async(req,res)=>{
    const {username,email,password}= req.body;
    try{
        const client = await Client.create({username,email,password});
       return  res.status(201).json({client})
    }
    catch(err){
        const errors = handleErrors(err);
        // status 400 == bad client request ...
       return  res.status(400).json({errors})
      
    }
  }
  
module.exports.login_post = async (req,res)=>{
    try{
     const {email,password} = req.body;
     const client = await Client.findOne({email});
     if(client && (await bcrypt.compare(password,client.password))){
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