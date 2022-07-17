const router = require("express").Router();
const userRoute = require("./userRoute.js");
const thoughtRoute = require("./thoughtRoute.js");

router.use("/users", userRoute);
router.use("/thoughts", thoughtRoute);

module.exports = router;
