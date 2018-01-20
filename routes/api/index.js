const router = require("express").Router();
const binanceRoutes = require("./binance");

// Binance routes
router.use("/binance", binanceRoutes);

module.exports = router;