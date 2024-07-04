import mongoose from "mongoose";

const schema = new mongoose.Schema({

  image : {
    public_id : {
      type : String,
      required : true,
    },
    url : {
      type : String,
      required : true,
    },
    fileName : {
      type : String,
      required : true,
    }
  }

});


export const ProfileImage = mongoose.model("ProfileImage" , schema);