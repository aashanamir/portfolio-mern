import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { ProfileImage } from "../model/profileImageModel.js";
import { ErrorHandler } from "../utils/ErrorHandler.js"
import fs from "fs";
import { v2 as cloudinary } from 'cloudinary';
import path from "path";


/*
**********
**********
Uploding 
**********
Profile
*********
Image
********
*/

export const uploadProfileImage = catchAsyncError(async (req, res, next) => {

  const file = req.file;

  if (!file) {
    return next(new ErrorHandler("Please Upload Profile Image", 404));
  }

  const uploadResult = await cloudinary.uploader // Upload on Cloudinary
    .upload(
      file.path, {
      public_id: 'Profile Image',
    }
    )
    .catch((error) => {
      console.log(error);
    });
/*
  try { // deleting image from server which is uploaded by multer middleware
    const res = fs.unlinkSync(path.resolve(`public/images/${file.filename}`));
  } catch (error) {
    console.log(error);
  }

  */
  const profileImage = await ProfileImage.create({ // Creating image in database
    image: {
      public_id: uploadResult.public_id,
      url: uploadResult.url,
      fileName: file.filename,
    }
  });


  res.status(201).json({
    success: true,
    profileImage,
    message: "Profile Image Uploaded Successfully",
  })
});


/*
**********
**********
Getting 
**********
Profile
*********
Image
********
*/

export const getProfileImage = catchAsyncError(async (req, res, next) => {
  const profileImage = await ProfileImage.findOne();

  res.status(200).json({
    success: true,
    profileImage,
  })
})

/*
**********
**********
Updating 
**********
Profile
*********
Image
********
*/

export const updateProfileImage = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const file = req.file;

  if (!file) {
    return next(new ErrorHandler("Please Upload File ", 404));
  }

  const prevImage = await ProfileImage.findByIdAndDelete(id);

  if (!prevImage) {
    return next(new ErrorHandler("No Image Found with this id", 404));
  }



  await cloudinary.uploader.destroy(prevImage.image.public_id) //Deleting Image From Cloudinary
    .catch((error) => {
      console.log(error);
      return next(new ErrorHandler("Previous image not deleted from Cloudinary", 400));
    });


  const uploadResult = await cloudinary.uploader
    .upload(
      file.path, {
      public_id: 'Profile Image',
    }
    )
    .catch((error) => {
      console.log(error);
    });

  try { // deleting image from server which is uploaded by multer middleware
    const res = fs.unlinkSync(path.resolve(`public/images/${file.filename}`));
  } catch (error) {
    console.log(error);
  }

  const profileImage = await ProfileImage.create({
    image: {
      public_id: uploadResult.public_id,
      url: uploadResult.url,
      fileName: file.filename,
    }
  });

  res.json({
    success: true,
    message: "Profile Image Updated Successfully",
  })

});




/*
**********
**********
Deleting 
**********
Profile
*********
Image
********
*/



export const deleteProfileImage = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const image = await ProfileImage.findByIdAndDelete(id);

  if (!image) {
    return next(new ErrorHandler("No Profile Image Exist with this Id", 404));
  }

  try {
    fs.unlinkSync("./public/images/" + image?.image?.fileName);
  } catch (error) {
    return next(new ErrorHandler("Image Can't be deleted" + error, 404));
  }

  await cloudinary.uploader.destroy(prevImage.image.public_id)
    .catch((error) => {
      console.log(error);
      return next(new ErrorHandler("Previous image not deleted from Cloudinary", 400));
    });


  res.status(200).json({
    success: true,
    message: "Profile Image Deleted Successfully",
  });

})

