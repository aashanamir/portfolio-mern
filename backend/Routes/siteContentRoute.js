import express from "express";
import { createSiteContent, getSiteContent, updateSiteContent } from "../controller/siteContentController.js";
import {isAuthenticated} from "../middleware/auth.js"

const router = express.Router();


router.route("/create").post(isAuthenticated , createSiteContent);
router.route("/").get(getSiteContent);
router.route("/:id").put( isAuthenticated , updateSiteContent);


export default router;