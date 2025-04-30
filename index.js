import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { MAX_JSON_SIZE, PORT, REQUEST_LIMIT, REQUEST_MESSAGE, REQUEST_TIME, WEB_CACHE } from "./src/config/config.js";
import router from "./src/routes/api.js";



const app = express();

//Default Middleware
app.use(cors(['http://localhost:8000']));
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(helmet());
app.use(cookieParser());


//Rate Limiter Middleware
const limiter = rateLimit({
    windowMs: REQUEST_TIME,
	limit: REQUEST_LIMIT,
    message: REQUEST_MESSAGE
})
app.use(limiter);


//Cache
app.set("etag", WEB_CACHE)

//MongoDB connection



// API Routes
app.use("/api/v1", router);


//App Listenning
app.listen(PORT, ()=>{
    console.log("Server Running on Port: ", PORT);
})



//1:09:31
