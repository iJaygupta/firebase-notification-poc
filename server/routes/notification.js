var express = require("express");
const notificationController = require("../controllers/notification");


var router = express.Router();

router.post("/notify", notificationController.sendNotificationFromFirebase);


module.exports = router;