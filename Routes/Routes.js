import express from "express";
import GetsimilarProducts from "./GetSimilarProduct";
const router = express.Router();


router.get('/getproductscategories/:belongs', GetsimilarProducts);

export default router