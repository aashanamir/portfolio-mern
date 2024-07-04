import mongoose from "mongoose";
export const connnectDb = async () => {

    try {
      await mongoose.connect(process.env.DATABAE , {
        dbName : "portfolio"
      });
      console.log("Database Connected Successfully");

    } catch (error) {
      console.log(error);
    }
   
  }