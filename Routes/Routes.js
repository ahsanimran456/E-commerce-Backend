import express from "express";
const router = express.Router();


router.get('/getproducts', (req, res) => {
    res.send([
        {
            id:1,
            class:"2"
        }
    ]);
});

export default router