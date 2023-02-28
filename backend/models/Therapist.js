const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const therapistSchema = new Schema({
    name:{
        type:String,
        required:[true,"Please entrer a username"],
        unique:true,
      },
    email:{
      type:String,
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
    phoneNumber:{
         type:Number,
         minlength:[10,"Please enter correct phone Number"]
    },
    yearsOfExperience:{
        type: Number,
    },
    categoryServices:[
        {
            type: Schema.Types.ObjectId,
            ref:'Categories'
        }
    ],
    reviews:[{
         type: Schema.Types.ObjectId,
         ref:'Reviews'
    }],
    stars:[{
        type: Schema.Types.ObjectId,
        ref:'Stars'
    }]
})


//fire a function after a new user has been saved to db...
therapistSchema.post('save',function(doc,next){
    console.log('new therapist was saved',doc);
    next()
    })
    
    //fire a function before a doc is saved to db...
    therapistSchema.pre('save',async function(next){
      //hash users password...
      const salt = await bcrypt.genSalt()
      this.password=await bcrypt.hash(this.password,salt)
    ;  //this refers to user...
    console.log("therapist about to be saved",this)
      next()
    })

module.exports = mongoose.model("Therapist",therapistSchema)