import jwt from "jsonwebtoken";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import { User } from "../model/userModel.js";

export const isAuthenticated = catchAsyncError(async (req , res , next) => {
  const {token} = req.cookies;

  if(!token){
    return next(new ErrorHandler("Please Login First to Access This Route" , 401));
  }

  const decoded = jwt.verify(token , process.env.JWTSECRET);


  req.user = await User.findById(decoded.id);

  next();
})