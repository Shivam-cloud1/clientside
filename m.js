  const mongoose = require('mongoose');
  const validator = require("validator");

   const modelSchema = new mongoose.Schema({
       name : {
           type : String,
           required: true,
           minlength:3
       },
       email : {
        type : String,
        required: true, 
        unique: [true,'email is already present'],
        validate(value){

            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
       },
       mobile :{
       type: Number,
       min:10,
       max: 10,
       require: true,
       unique: true
       },
       address :{
           type : String,
           require: true,
           street: {
            type : String,
            require: true,
           },
           locality:{
            type : String,
            require: true,
           },
           city:{
            type : String,
            require: true,
           },
           state:{
            type : String,
            require: true,
           },
           pincode:{
            type : String,
            require: true,
           },
           coordiantesType:{
            type : String,
            require: true,
           },
           coordiantes:{
            type : Number,
            require: true,
           }
       }
   });
    const model = new mongoose.model("model",modelSchema);
    module.exports = model;