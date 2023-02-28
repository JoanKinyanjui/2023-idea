const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const  starSchema = new Schema({
 starNumber: Number,
 staredTherapists:[{
    type: Schema.Type.ObjectId,
    ref:'Therapist'
 }]
})

module.exports = mongoose.model("Star",starSchema)