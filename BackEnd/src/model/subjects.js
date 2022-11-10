const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const subjectsSchema = new mongoose.Schema({
        subjectname: { type: String, required: true },
        marks: {type:Number , required: true},
        isDelete: {type:Boolean, default:false},
        userId : {type:ObjectId , required:true}
        }, { timestamps: true })

module.exports = mongoose.model("Subject", subjectsSchema)
