import mongoose from "mongoose";

const schema = new mongoose.Schema({
  siteName : {
    type : String,
    required : true,
  },
  heroHeading : {
    type : String,
    required : true,
  },
  heroDescription : {
    type : String,
    required : true,
  },
  skills : [
    {
      skillHeading : {
        required : true,
        type : String
      },
      skillDescription : {
        required : true,
        type : String
      }
    }
  ],
  phoneNo : {
    type : Number,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  socialLinks : {
    insta : {
      type : String,
      required : true,
    },
    fb : {
      type : String,
      required : true,
    },
    linkedIn : {
      type : String,
      required : true,
    },
    github : {
      type : String,
      required : true,
    }
  }
});


export const SiteContent = mongoose.model("SiteContent" , schema);