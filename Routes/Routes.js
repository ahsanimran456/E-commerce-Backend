import express from "express";
import GetsimilarProducts from "./GetSimilarProduct";
const router = express.Router();


router.post('/postproductscategories/:belongs', GetsimilarProducts);

export default router