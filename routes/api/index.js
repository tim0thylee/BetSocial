const router = require("express").Router();
const bookRoutes = require("./books");
const registerRoutes = require("./register")

// Book routes
// router.use("/books", bookRoutes);
router.use("/register", registerRoutes);

module.exports = router;
