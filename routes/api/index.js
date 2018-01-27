const router = require("express").Router();
const binanceRoutes = require("./binance");
const passportRoutes = require("./passport");
const settingsRoutes = require("./settings");
const outletRoutes = require("./outlets");

// Binance routes
router.use("/binance", binanceRoutes);

// Settings routes
router.use("/settings", settingsRoutes);
router.use("/outlets", outletRoutes);

// Passport routes
router.use("/passport", passportRoutes);

module.exports = router;