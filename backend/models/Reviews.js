const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
therapist:{
    type: Schema.Types.ObjectId,
    ref:'Therapist'
},
client:{
    type: Schema.Types.ObjectId,
    ref:'Client'
},
comment:{
    type: String,
}

})

module.exports = mongoose.model("Review",reviewSchema)