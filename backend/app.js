import express, { urlencoded } from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();


const buildPath = path.resolve("public/build/index.html")

config({
  path : "./config/.env",
})

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204,
};

// Middlewares
app.use(express.json());
app.use(urlencoded({extended : true}));
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(cookieParser());
// Routes
import SiteContent from "./Routes/siteContentRoute.js";
import profileImage from "./Routes/profileImageRoute.js";
import project from "./Routes/projectRoute.js";
import user from "./Routes/userRoute.js";

app.get("/" , (req , res , next ) => {
  res.sendFile(buildPath);
})
app.use("/api/v1/sitecontent" , SiteContent);
app.use("/api/v1/profile" , profileImage);
app.use("/api/v1/project" , project);
app.use("/api/v1/user" , user);


export default app;