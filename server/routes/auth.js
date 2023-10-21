import express from "express";
import { register } from "../controllers/auth/register.js";
import { forgotPass } from "../controllers/auth/forgotPass.js";
import { login } from "../controllers/auth/login.js";
import { logOut } from "../controllers/auth/logOut.js";

const router = express.Router();

//all auth routers
router.post("/register", register);
router.put("/forgotPass", forgotPass);
router.post("/login", login);
router.get("/logout", logOut);
export default router;
