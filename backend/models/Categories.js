const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    name:{
        type: String,
      },
    therapists:[{
        type: Schema.Types.ObjectId,
        ref:'Therapist'
    }]
})

module.exports = mongoose.model("Category",categorySchema)