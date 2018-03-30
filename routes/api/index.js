const router = require("express").Router();
const bookRoutes = require("./books");
const betsRoutes = require("./bets");

// Book routes
router.use("/books", bookRoutes);
router.use("/bets", betsRoutes);

module.exports = router;
