const signUpModel = require('../model/signUpModel')
const subjectsModel = require("../model/subjects")

const createSignUp = async function(req,res){
    try{
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]*).{8,}$/
        let body = req.body
        if (!body.firstname) return res.status(400).send({ status: false, msg: "First Name is required" })
        if (!body.lastname) return res.status(400).send({ status: false, msg: "Last Name is required" })
        if (!(emailRegex.test(body.email)) || !body.email) return res.status(400).send({ status: false, msg: "email is must in the valid formate" })
        if (!(passwordRegex.test(body.password)) || !body.password) return res.status(400).send({ status: false, msg: " password is must in the valid formate   REQUIREMENTS :  At least one upper case English letter , At least one lower case English letter , least one digit , At least one special character , Minimum eight in length" })
        if (!(passwordRegex.test(body.confirmPassword)) || !body.confirmPassword) return res.status(400).send({ status: false, msg: " password is must in the valid formate   REQUIREMENTS :  At least one upper case English letter , At least one lower case English letter , least one digit , At least one special character , Minimum eight in length" })
        let find = await signUpModel.findOne({email:body.email,password:body.password})
        if(find){
            return res.status(201).send({status: true , data:find})
        }else{
            let data = await signUpModel.create(body)
            return res.status(201).send({status: true , data:data})
        }

    }catch(err){
        return res.status(500).send({msg:err.message})
    }
}

const filterSubjects = async function (req,res){
    try{
        let param = req.query
        let data = await subjectsModel.find(param).sort({"marks":1})
        return res.status(201).send({status: true , data:data})
    }catch(err){
        return res.status(500).send({msg:err.message})
    }
}

const subjects = async function (req,res){
    try{
        let body = req.body 
        let prevSubject = await subjectsModel.findOne({userId:body.userId , subjectname:body.subjectname})
        if(prevSubject){
            body.marks = prevSubject.marks+body.marks
            let updatedData = await subjectsModel.findOneAndUpdate({userId:body.userId, subjectname:body.subjectname},body,{new:true})
            return res.status(201).send({status: true , data:updatedData})
        }else{
            let data = await subjectsModel.create(body)
            console.log(data)
            return res.status(201).send({status: true , data:data})
        }
    }catch(err){
        return res.status(500).send({msg:err.message})
    }
}

const deleteSubjects = async function (req,res){
    try{
        let param = req.query
        let data = await subjectsModel.findOneAndUpdate(param ,{ isDelete:true} , {new:true})
        return res.status(201).send({status: true, data: data})
    }catch(err){
        return res.status(500).send({msg:err.message})
    }
}
module.exports.createSignUp = createSignUp
module.exports.subjects = subjects
module.exports.filterSubjects = filterSubjects
module.exports.deleteSubjects = deleteSubjects

