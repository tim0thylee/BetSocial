const router = require("express").Router();
const betsRoutes = require("./bets");
const userRoutes = require("./user");

// Book routes
router.use("/bets", betsRoutes);
// User routes
router.use("/users", userRoutes);

module.exports = router;
