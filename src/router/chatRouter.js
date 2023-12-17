const express = require("express");
const router = express.Router()

const authMIddleware = require("../middleware/authMiddleware");
const chatCtrl = require("../controller/chatCtrl");

router.get('/', authMIddleware,  chatCtrl.userChats);
router.get('/:firstId/:secondId', authMIddleware,  chatCtrl.findChat);
router.delete('/:chatId', authMIddleware,  chatCtrl.deleteChat);

module.exports = router