import app from "./app.js";
import { connnectDb } from "./config/database.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import { v2 as cloudinary } from 'cloudinary';

connnectDb();


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


app.listen(process.env.PORT , ()=>{
  console.log("Server is running on " + process.env.PORT);
})


// Calling ErrorMiddleare

app.use(errorMiddleware);

