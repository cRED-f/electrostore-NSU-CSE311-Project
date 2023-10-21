import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import buyer from "./routes/buyer.js";
export const app = express();
config({
  path: "./data/config.env",
});

//middlewares
// app.use(express.json());
app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use(cookieParser());
app.use("/uploads", express.static("./uploads"));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

//routes
app.use("/api/user", auth);
app.use("/api/admin", admin);
app.use("/api/user", buyer);
