const router = require("express").Router();
const betsRoutes = require("./bets");

// Book routes
router.use("/bets", betsRoutes);

module.exports = router;
