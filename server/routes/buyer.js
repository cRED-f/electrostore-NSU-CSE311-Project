import express from "express";
import { addToCart, deleteFromCart } from "../controllers/buyer/addToCart.js";
import { isAuthenticated } from "../middlewares/isAuth.js";
import { getAllProducts } from "../controllers/buyer/getAllProducts.js";
import { payment_req } from "../controllers/buyer/payment_req.js";
import { getBuyerCartData } from "../controllers/buyer/getBuyerCartData.js";

const router = express.Router();

//all buyer routers
router.post("/cart/:products_id", isAuthenticated, addToCart);
router.delete("/cart/:cart_id", isAuthenticated, deleteFromCart);
router.get("/cart/:buyer_id", isAuthenticated, getBuyerCartData);

//get all products
//user dont need login to see products so we dont need isAuthenticated
router.get("/getAllProducts", getAllProducts);

//all buyer payment routers
router.post("/payment/:cart_id", isAuthenticated, payment_req);
export default router;
