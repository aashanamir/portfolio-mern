import express from "express";
import { upload } from "../middleware/multerMiddleware.js";
import { deleteProfileImage, getProfileImage, updateProfileImage, uploadProfileImage } from "../controller/profileImageController.js";
import { isAuthenticated } from "../middleware/auth.js"

const router = express.Router();

router.route('/').get(getProfileImage);

/******************************************************
 * Admin**********************************************
 * Routes********************************************
 * Only********************************************
 */

router.route('/upload').post(isAuthenticated, upload.single('file'), uploadProfileImage);

router.route('/update/:id').put(isAuthenticated, upload.single('file'), updateProfileImage);

router.route('/delete/:id').delete(isAuthenticated, deleteProfileImage);



export default router;
