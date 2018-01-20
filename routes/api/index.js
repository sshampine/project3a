const router = require("express").Router();
const binanceRoutes = require("./binance");
const passportRoutes = require("./passport");

// Binance routes
router.use("/binance", binanceRoutes);

// Passport routes
router.use("/passport", passportRoutes);

module.exports = router;