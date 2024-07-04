import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({

  email : {
    type : String,
    required : true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email address'
    },
  },
  password : {
    type : String,
    required : true,
  }

});

// Password Hashing Pre Save 

schema.pre("save" , async function(next){

  if(!this.isModified("password")){
    return next();
  }

  this.password = await bcrypt.hash(this.password , 10);
  
  next();
});


// Get Jwt Token

schema.methods.getJwtToken = function(){
  return jwt.sign({id : this._id} , process.env.JWTSECRET);
}


// Password Verify

schema.methods.comparePassword = async function(pss){
  return await bcrypt.compare(pss , this.password);
}

export const User = mongoose.model("User" , schema);