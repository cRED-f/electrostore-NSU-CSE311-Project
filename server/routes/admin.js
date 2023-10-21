import express from "express";
import {
  categories,
  deleteCategories,
  updateCategories,
} from "../controllers/admin/categories.js";
import {
  products,
  deleteProducts,
  updateProducts,
} from "../controllers/admin/products.js";
import { productsStatus } from "../controllers/admin/productsStatus.js";
import { getAllProductsPaymentReq } from "../controllers/admin/getAllProductsPaymentReq.js";
import upload from "../middlewares/multeR.js";
import { getAllCategories } from "../controllers/admin/getAllCategories.js";
import { getAllProductsPaymentDone } from "../controllers/admin/getAllProductsPaymentDone.js";
import {
  billboardUpload,
  deleteBillboard,
  getAllBillboards,
  updateBillboard,
} from "../controllers/admin/billboardUpload.js";
import {
  addSubCategories,
  deleteSubCategories,
  getAllSubCategories,
  updateSubCategories,
} from "../controllers/admin/sub_categories.js";
const router = express.Router();

//categories routers
router.post("/categories", upload, categories);
router.get("/get-all-categories", getAllCategories);
router.delete("/categories/:id", deleteCategories);
router.put("/categories/:id", upload, updateCategories);

//sub categories routers
router.post("/sub-categories", addSubCategories);
router.get("/sub-categories", getAllSubCategories);
router.delete("/sub-categories/:sub_categories_id", deleteSubCategories);
router.put("/sub-categories/:sub_categories_id", updateSubCategories);

//products routers
router.post("/products", upload, products);
router.delete("/products/:products_id", deleteProducts);
router.put("/products/:products_id", upload, updateProducts);

//products approved routers
router.put("/products/payment/status/:payment_req_id", productsStatus);
router.get("/products/payment/status", getAllProductsPaymentReq);

//get all payments done
router.get("/products/payment", getAllProductsPaymentDone);

//get revenue data
// router.get("/revenue", revenueData);

//billboard routers
router.post("/products/billboard/upload", upload, billboardUpload);
router.delete(
  "/products/billboard/upload/delete/:billboard_id",
  deleteBillboard
);
router.put(
  "/products/billboard/upload/update/:billboard_id",
  upload,
  updateBillboard
);
router.get("/products/billboard", getAllBillboards);
export default router;
