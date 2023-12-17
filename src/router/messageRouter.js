const express = require("express");
const router = express.Router()

const messageCtrl = require("../controller/messageCtrl");
const authMIddleware = require("../middleware/authMiddleware");

router.post('/', authMIddleware,  messageCtrl.addMessage);
router.get('/:chatId', messageCtrl.getMessages);
router.delete('/:messageId', authMIddleware,  messageCtrl.deleteMsssage);

module.exports = router