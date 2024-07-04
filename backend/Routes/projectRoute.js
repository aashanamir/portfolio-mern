import express from "express";
import {upload} from "../middleware/multerMiddleware.js"
import { createProject, deleteProject, getAllProjects, getSingleProject } from "../controller/projectController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();


router.route("/all").get(getAllProjects);

router.route("/create").post(isAuthenticated , upload.single("file"), createProject);

router.route("/:id").get(getSingleProject).delete(isAuthenticated , deleteProject);




export default router;