import express from "express";
import GetsimilarProducts from "./GetSimilarProduct";
import GetToptrendingPRoducts from "./GetToptrendingPRoducts";
const router = express.Router();


router.get('/getproductscategories/:belongs', GetsimilarProducts);
router.get('/getproductstrending/:category', GetToptrendingPRoducts);

export default router