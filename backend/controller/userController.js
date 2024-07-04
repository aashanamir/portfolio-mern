import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { User } from "../model/userModel.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { sendToken } from "../utils/sendToken.js";


export const createUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Fill All the required Feild", 400));
  }

  let user = await User.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User Already Exist With this email Address", 400));
  }

  user = await User.create({ email, password });

  sendToken(user, 201, res);

});


export const logInUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Fill All the required Feild", 400));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("Please Login with Valid Email Address", 401));
  }

  const comparePassword = await user.comparePassword(password);

  if (!comparePassword) {
    return next(new ErrorHandler("Your Password is not Correct", 401));
  }

  sendToken(user, 200, res);

});


export const getUserDetails = catchAsyncError( async (req , res , next) => {
  const {user} = req;

  if(!user){
    return next(new ErrorHandler("Login First to Access Profile Details" , 401));
  }

  res.status(200).json({
    success : true,
    user,
  })
});


export const logoutUser = catchAsyncError(async (req, res, next) => {

  res.status(200).cookie("token", null, {
    expires: new Date(Date.now()),
  }).json({
    success: true,
    message: "Logout Successfully",
  })
});