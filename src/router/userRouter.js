const express = require("express");
const router = express.Router()

const userCtrl = require("../controller/userCtrl");
const authMIddleware = require("../middleware/authMiddleware");

router.get('/:id', userCtrl.getUser);
router.get('/', userCtrl.getAllUsers);
router.put('/:id', authMIddleware,  userCtrl.updateUser);
router.delete('/:id', authMIddleware,  userCtrl.deleteUser);

module.exports = router