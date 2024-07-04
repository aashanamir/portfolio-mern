import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { Project } from "../model/projectModel.js";
import mongoose from "mongoose";
import fs from "fs";

// Create Project

export const createProject = catchAsyncError(async (req, res, next) => {
  const file = req.file;
  console.log(req.body);
  const { name, description, category, role, visitLink } = req.body;

  if (!name || !description || !category || !role || !file) {
    return next(new ErrorHandler("Please Fill All The Required Feilds to Add Project", 404));
  }


  const project = await Project.create({
    name, description, category, role, image: {
      public_id: file.filename,
      url: file.path
    }, visitLink
  });

  res.status(201).json({
    success: true,
    project,
    message: "Project Created Successfully",
  })

});


// Get All Projects

export const getAllProjects = catchAsyncError(async (req, res, next) => {
  const porjects = await Project.find();

  if (!porjects) {
    return next(new ErrorHandler("No Project Found", 404));
  }

  res.status(200).json({
    success: true,
    porjects,
  })
});


// Get Sinlge Project

export const getSingleProject = catchAsyncError(async (req, res, next) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id) || !id) {
    return next(new ErrorHandler("Invalid ID ", 400));
  }

  const project = await Project.findById(id);

  if (!project) {
    return next(new ErrorHandler("No project Exist With this id", 404));
  }

  res.status(200).json({
    success: true,
    project,
  })

});

// Delete Project

export const deleteProject = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id) || !id) {
    return next(new ErrorHandler("Invalid ID ", 400));
  }

  const project = await Project.findByIdAndDelete(id);

  try {

    fs.unlinkSync("./public/images/" + project.image.public_id);

  } catch (error) {
    return next(new ErrorHandler("Image Not Deleted From The PUblic Folder", 400));
  }
  if (!project) {
    return next(new ErrorHandler("No project Exist With this id", 404));
  }

  res.status(200).json({
    success: true,
    project,
    message: "Project Deleted Successfully",
  })

});