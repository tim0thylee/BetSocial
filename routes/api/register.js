const router = require("express").Router();
const registerController = require("../../controllers/passportController");


router.route("/")
    .post(registerController.create)
    .post(registerController.passport);

module.exports = router;