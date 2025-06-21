const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth } = require('../middleware/auth');

router.get('/rewards', auth, userController.getRewards);
router.post('/purchase', auth, userController.purchaseItem);
router.post('/redeem', auth, userController.redeemReward);
router.get('/transactions', auth, userController.getTransactionHistory);

module.exports = router;