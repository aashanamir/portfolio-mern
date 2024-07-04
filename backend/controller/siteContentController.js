import mongoose from "mongoose";
import {catchAsyncError} from "../middleware/catchAsyncError.js";
import { SiteContent } from "../model/siteContentModel.js";
import {ErrorHandler} from "../utils/ErrorHandler.js";


// Create Site Content

export const createSiteContent = catchAsyncError(async (req , res , next) => {
  
  const {siteName , heroHeading , heroDescription , skills, phoneNo , email , socialLinks } = req.body;

  if(!siteName || !heroHeading || !heroDescription || !skills|| !phoneNo || !email || !socialLinks){
    return next(new ErrorHandler("Please Fill All the required Feilds" , 501));
  }
  
  const siteContent = await SiteContent.create({
    siteName , heroHeading , heroDescription , skills, phoneNo , email , socialLinks 
  });

  res.status(201).json({
    success : true,
    siteContent,
    message : "Site Content Created Successfully",
  });

});


// Readt Site Content
export const getSiteContent = catchAsyncError(async (req , res , next) => {

  const siteContent = await SiteContent.findOne();

  res.status(200).json({
    success : true,
    siteContent,
  });

});


// Update Site Content
export const updateSiteContent = catchAsyncError(async (req , res , next) => {
  const {id} = req.params;

  const {siteName , heroHeading , heroDescription , skills, phoneNo , email , socialLinks } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id) || !id) {
    return next(new ErrorHandler("Invalid ID ", 400));
  }

  if(!siteName || !heroHeading || !heroDescription || !skills|| !phoneNo || !email || !socialLinks){
    return next(new ErrorHandler("Please Fill All the required Feilds" , 501));
  }
  
  const siteContent = await SiteContent.findByIdAndUpdate(id , { siteName , heroHeading , heroDescription , skills, phoneNo , email , socialLinks } , {new : true});

  if(!siteContent) {
    return next(new ErrorHandler("No Site Content Exist with this Id" , 404));
  }

  res.status(200).json({
    success : true,
    siteContent,
  });

});