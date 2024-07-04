import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  category : {
    type : String,
    required : true,
  },
  image : {
    public_id : {
      type : String,
      required : true,
    },
    url : {
      type : String,
      required : true,
    }
  },
  role : {
    type : String,
    required : true,
  },
  visitLink : {
    type : String,
    default : "/"
  }
});

export const Project = mongoose.model("Project" , schema);