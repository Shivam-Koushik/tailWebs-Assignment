const mongoose = require('mongoose')
const signUpSchema = new mongoose.Schema({
        firstname: { type: String, required: true },
        lastname: {type: String,required: true },
        email: {type: String,required: true },
        password: {type: String, required: true },
        confirmPassword: { type: String, required:true }
        }, { timestamps: true })

module.exports = mongoose.model("SignUp", signUpSchema)
