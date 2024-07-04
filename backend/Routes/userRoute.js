import express from "express";
import { createUser, getUserDetails, logInUser, logoutUser } from "../controller/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/create").post(createUser);

router.route("/login").post(logInUser);

router.route("/me").get(isAuthenticated , getUserDetails);


router.route("/logout").get(logoutUser);




export default router;