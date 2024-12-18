const express = require("express");
const { createItem, getAllItems } = require("../controllers/itemController");
const { checkShippingFee } = require("../controllers/checkShippingController.js");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createItem);
router.get("/", authMiddleware, getAllItems);
router.post("/check-shipping", authMiddleware, checkShippingFee); 



module.exports = router;
